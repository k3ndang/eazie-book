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

router.post('/', upload.single('file'), (req, res) => {
    console.log('upload is', upload)
    //let filePath = req.file.filename;
    // let fileName = req.file.originalname;
    // let id = req.params.id;
    
    /* const queryText = `
    INSERT INTO photos
    (url, "itemId")
    `

    const queryParams = [
        filePath, 
        id
    ] */
    
    pool.query(queryText, queryParams)
    .then(() => res.sendStatus(201))
    .catch ((err) => {
        console.log('upload failed', err);
        res.sendStatus(500)
    })
})

module.exports = router;