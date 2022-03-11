const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `
        SELECT * FROM "bookable_items"
        WHERE "categoryId" = $1
    `;

    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting side-by-side\'s in fetchSideBySide', err);
        res.sendStatus(500);
    })
})

module.exports = router;