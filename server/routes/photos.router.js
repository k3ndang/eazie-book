const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
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
/* const upload = multer({ storage: fileStorageEngine}); */

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'eazie-book',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            console.log('multer s3 file is', file);
            cb(null, Date.now() + '--' + file.originalname)
        }
    })
})

/* const upload = multer({ storage: multerS3({
    s3: s3,
    bucket: 'some-bucket', */ /* THIS NEEDS TO BE CHANGED */
   /*  acl: 'public-read'
    metadata: function (req, file, cb){
        cb(null, {fieldName: file.location});
    },
    key: function (req, file, cb) {
        cb(null, Date.now().toString())
    }
})}); */

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
        req.file.location,
        req.body.itemId
    ];

    pool.query(queryText, queryParams)
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error('ERROR in posting photo', err);
        res.sendStatus(500);
    })

    
    router.get('/', (req, res) => {
        const queryText = `
        SELECT * FROM "photos";
        `;
    })     
})

module.exports = router;