const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const multer  = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/picture/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({ storage: fileStorageEngine });




router.get('/', (req, res) => {
    const sqlText = 
    `SELECT * FROM bookable_items`

    pool.query(sqlText)
        .then((result) => {
            console.log('result is', result.rows);
            
            res.send(result.rows)
        })
})

router.post('/', upload.single("file"), (req, res) => {
    console.log('made it to server', req.body.newBookableItem);
    console.log('made it to server', req.body.data);


    const title = req.body.newBookableItem.title
    const summary = req.body.newBookableItem.summary
    const detail = req.body.newBookableItem.details
    const rate = req.body.newBookableItem.rate
    const unitTime = req.body.newBookableItem.unitTime
    const location = req.body.newBookableItem.location
    const categoryId = req.body.newBookableItem.categoryId

    let queryText = `
        INSERT INTO "bookable_items" 
        ("title", "summary", "detail", "rate", "unitTime", "location", "categoryId", "clientId")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

    let queryParams = [
        title, 
        summary, 
        detail, 
        rate, 
        unitTime, 
        location, 
        categoryId, 
        req.body.clientId
    ];

    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('query success', result);
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('query error', error);
            res.sendStatus(500)
        })
})

// Selected bookableItem by ID so it can be edit
router.get('/selected/:id', (req, res) => {
    console.log('bookableItemId', req.params.id);
    let bookableItemId = req.params.id
    const sqlText = `
        SELECT * FROM bookable_items
        WHERE id = $1
    `;
    const sqlParams = [
        bookableItemId
    ]
    pool.query(sqlText, sqlParams)
        .then((result) => {
            console.log('result is', result.rows);
            res.send(result.rows[0])
        })
}); // end of GET /selected/:id

router.put('/', (req, res) => {
    let updateBookableItem = req.body;

    const sqlText = `
        UPDATE "bookable_items"
        SET ("title", "summary", "detail", "rate", "unitTime", "location", "categoryId") =
            ($1, $2, $3, $4, $5, $6, $7)
        WHERE "id" = $8
    `

    const sqlParams = [
        updateBookableItem.title,
        updateBookableItem.summary,
        updateBookableItem.detail,
        updateBookableItem.rate,
        updateBookableItem.unitTime,
        updateBookableItem.location,
        updateBookableItem.categoryId,
        updateBookableItem.id
    ]

    pool.query(sqlText, sqlParams)
        .then ((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.error('Error in UPDATE bookableItem', error)
            res.sendStatus(500)
        })
}); // end of PUT bookableItem


module.exports = router