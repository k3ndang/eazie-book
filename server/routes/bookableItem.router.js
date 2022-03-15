const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
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



//grabs data from the bookable items in the database 
//comes from the fetchBookable item saga
router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `
        SELECT 
            "bookable_items"."id",
            "bookable_items"."title",
            "bookable_items"."summary",
            "bookable_items"."detail",
            "bookable_items"."rate",
            "bookable_items"."unitTime",
            "bookable_items"."location",
            "categories"."name",
            "user"."companyName"
        FROM bookable_items
        JOIN "user" ON "bookable_items"."clientId" = "user"."id"
        JOIN "categories" ON "bookable_items"."categoryId" = "categories"."id"
    `;

    pool.query(sqlText)
        .then((result) => {
            console.log('result is', result.rows);
            
            res.send(result.rows)
        })
        .catch((err) => {
            console.error('ERROR in getting bookable_items', err);
            res.sendStatus(500);
        })
})

//allows client to grab a specific category of item from the database 
//comes from the bookable item saga
router.get('/renterReq/:categoryId', rejectUnauthenticated, (req, res) => {
    const categoryId = req.params.categoryId;

    const sqlText = `
        SELECT * FROM "bookable_items"
        WHERE "categoryId" = $1;
    `;

    const sqlParams = [categoryId]

    pool.query(sqlText, sqlParams)
        .then((result) => {
            console.log('result is', result.rows);
            res.send(result.rows)
        })
        .catch((err) => {
            console.error('ERROR getting by id in bookableItem', err);
            res.sendStatus(500);
        })
})


router.post('/', upload.single("file"), rejectUnauthenticated, (req, res) => {
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
router.get('/selected/:id', rejectUnauthenticated, (req, res) => {
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

// allows the user to modify a specific bookable item based on id 
router.put('/', rejectUnauthenticated, (req, res) => {
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