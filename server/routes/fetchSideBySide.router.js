const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//grabs photos for a nested component in the landing page
router.get('/:id', (req, res) => {
    const queryText = `
        SELECT * FROM "bookable_items"
        WHERE "categoryId" = $1
    `;

    pool.query(queryText, [req.body.id])
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting side-by-side\'s in fetchSideBySide', err);
        res.sendStatus(500);
    })
})

module.exports = router;