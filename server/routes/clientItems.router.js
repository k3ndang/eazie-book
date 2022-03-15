const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.body is', req.params);
    
    const queryText = `
        SELECT * FROM "bookable_items" 
        WHERE "clientId" = $1
    `;

    const queryParams = [
        req.params.id
    ];

    pool.query(queryText, queryParams)
    .then((dbRes) => {
        console.log('bdRes.rows in get selected', dbRes.rows);
        res.send(dbRes.rows);
    })
    .catch((err) => {
        console.error('ERROR getting items for client', err);
        res.sendStatus(500);
    })
})

module.exports = router