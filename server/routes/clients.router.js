const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "user"
        WHERE "authLevel" = 'client'
        ORDER BY "id" ASC;
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


router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in client.router.put');

    const queryText = `
        UPDATE "user"
        SET "firstName" = $1, "lastName" = $2, "email" = $3, "phoneNumber" = $4, "companyName" = $5, "address" = $6, "city" = $7, "state" = $8, "zipcode" = $9, "websiteUrl" = $10
        WHERE "id" = $11
    `;

    const queryParams = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.phoneNumber,
        req.body.companyName,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.zipCode,
        req.body.websiteUrl,
        req.params.id
    ]

    pool.query(queryText, queryParams)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.error(`ERROR in making database query ${queryText}`, error);
        res.sendStatus(500);
    })
    
})

module.exports = router;