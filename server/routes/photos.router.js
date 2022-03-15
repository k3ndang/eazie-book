const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const multer = require('multer');
const path = require('path')
const router = express.Router();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/photos/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine});

router.get('/:id', (req, res) => {

    console.log('req.body is', req.params.id);
    
    const queryText = `
        SELECT * FROM "photos" WHERE "itemId" = $1;
    `;

    pool.query(queryText, [req.params.id])
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((err) => {
        console.error(`ERROR in getting images for ${req.body.id}`, err);
        res.sendStatus(500);
    })
});

//uploads a file (photo) to the database 
router.post('/:id', upload.single('selectedFile'), rejectUnauthenticated, (req, res, next) => {
    console.log('req.body is,', req.body);
    /* console.log('req.file is,', req.file); */

    const queryText = `
        INSERT INTO "photos" 
            ("url", "itemId")
        VALUES ($1, $2)
    `;

    const queryParams = [
        req.file.filename,
        req.body.itemId
    ];

    pool.query(queryText, queryParams)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error('ERROR in posting photo', err);
        res.sendStatus(500);
    })

    
    
    
    /* let filePath = req.file.path;
    //chops off the first 7 characters 
    let file = filePath.slice(7)
    console.log('file is', file);
    let id = req.body.id
    
    let queryText = `
    INSERT INTO photos (url, "itemId")
    VALUES ($1, $2)
    `;

    let queryParams = [
        file, id
    ]


    
    pool.query(queryText, queryParams)
    .then(() => res.sendStatus(200))
    .catch ((err) => {
        console.log('upload failed', err);
        res.sendStatus(500)
    }) */
})

module.exports = router;