const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "user"
        WHERE "authLevel" = 'client';
    `;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting clients in fetchClients.reducer', err);
        res.sendStatus(500);
    })
})

module.exports = router;