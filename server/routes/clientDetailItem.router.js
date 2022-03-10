const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

//router to grab all bookable items according to client id 
router.get('/', rejectUnauthenticated, (req, res) => {
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
                        JOIN "categories" ON "categories"."id"="bookable_items"."categoryId"
                        JOIN "photos" ON "photos"."itemId"="bookable_items"."id"  
                        JOIN "user" ON "user".id="bookable_items"."clientId" 
                        WHERE "user"."id"= $1;
                        `
    const queryParams = [req.user.id]
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting bookable items according to client id in clientDetailItem.router', err);
        res.sendStatus(500);
    })
}) 



// Router to grab the specific bookable item on the client detail page 
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
                        JOIN "categories" ON "categories"."id"="bookable_items"."categoryId"
                        JOIN "photos" ON "photos"."itemId"="bookable_items"."id"  
                        JOIN "user" ON "user".id="bookable_items"."clientId" 
                        WHERE "bookable_items"."id"= $1 AND "user".id= $2 ;
                        `;
    const queryParams = [req.params.id, req.user.id]
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR in get/:id getting bookable item detail data in clientDetailItem.router', err);
        res.sendStatus(500);
    })
}) 
module.exports = router;