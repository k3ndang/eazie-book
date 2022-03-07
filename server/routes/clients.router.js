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



router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params.id in delete is', req.params.id);

    const queryText = `
        DELETE FROM "user"
        WHERE id = $1;
    `;

    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(204);
    })
    .catch((err) => {
        console.error('DELETE failed in fetchClient');
        res.sendStatus(500);
    })
})



router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params.id in get active client is', req.params.id);

    const queryText = `
        SELECT * FROM "user"
        WHERE id = $1;
    `;
    
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting active client', err);
        res.sendStatus(500);
    })
})

module.exports = router;