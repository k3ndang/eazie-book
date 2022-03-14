const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

//modifies a category for a specific bookable item
router.put('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
        UPDATE "bookable_items"
        SET "categoryId" = $1
        WHERE "id" = $2;
    `;

    const queryParams = [
        req.body.parentId,
        req.body.itemId
    ];

    pool.query(queryText, queryParams)
    .then((result) => {
        res.sendStatus(204);
    })
    .catch((err) => {
        console.error('ERROR in updating bookable item parentId', err);
        res.sendStatus(500);
    })
})

module.exports = router;