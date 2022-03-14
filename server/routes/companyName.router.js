const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT "companyName" as "label",
        "id"
        FROM "user"
        WHERE "authLevel" = 'client';
    `;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((err) => {
        console.error('ERROR on retrieving company names from user autocomplete', err);
        res.sendStatus(500);
    })
})

module.exports = router;