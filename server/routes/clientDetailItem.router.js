const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT 
    "bookable_items"."title", 
    "bookable_items"."summary", 
    "bookable_items"."detail", 
    "bookable_items"."rate", 
    "bookable_items"."categoryId",
    "bookable_items"."unitTime", 
    "bookable_items"."location",
    "categories"."name", 
    "photos"."url"
    FROM "bookable_items"
    JOIN "categories" ON "categories"."id" = "bookable_items"."categoryId"
    JOIN "photos" ON "photos"."itemId" = "bookable_items"."id"  
    WHERE "bookable_items"."clientId"= $1;
    `;
    const queryParams = [req.user.id]
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting clients in category.reducer', err);
        res.sendStatus(500);
    })
}) 
module.exports = router;