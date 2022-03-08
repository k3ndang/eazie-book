const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = 
    `SELECT * FROM bookable_items`

    pool.query(sqlText)
        .then((result) => {
            console.log('result is', result.rows);
            
            res.send(result.rows)
        })
})

router.post('/', (req, res) => {
    console.log('made it to server', req.body);
    const title = req.body.title
    const summary = req.body.summary
    const detail = req.body.details
    const rate = req.body.rate
    const unitTime = req.body.unitTime
    const location = req.body.location
    const categoryId = req.body.categoryId
    const clientId = req.body.clientId

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
        clientId
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

module.exports = router