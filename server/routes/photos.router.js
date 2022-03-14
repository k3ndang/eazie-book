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

const upload = multer({ storage: fileStorageEngine });

//uploads a file (photo) to the database 
router.post('/', upload.single('file'), rejectUnauthenticated, (req, res) => {
    console.log('req.file is', req.file);
    
    let filePath = req.file.path;
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
    })
})

module.exports = router;