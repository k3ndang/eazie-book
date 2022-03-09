const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "categories"
    `;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting clients in category.reducer', err);
        res.sendStatus(500);
    })
}) 

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req.body is', req.body);
    const insertBirdQuery = `
                                INSERT INTO categories (
                                    "id", 
                                    "name", 
                                    "parentId",  
                                    )
                                VALUES
                                    ($1, $2, NULLIF($3,'');
                                 ` 
            const queryParams= [
                                req.body.id,
                                req.body.name,
                                req.body.parentId
                                ]
              pool.query(insertBirdQuery, queryParams)
              .then(dbRes => {
                  res.sendStatus(200);
              })
              .catch(err => {
                  console.log('error occurred completing the POST request on the clientList.router', err);
                  res.sendStatus(500);
              })
    });

module.exports = router;