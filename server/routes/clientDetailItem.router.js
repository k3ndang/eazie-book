const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

//router to grab all bookable items according to client id 
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('req.user.id is', req.user.id);
    const queryText = `
                        SELECT 
                        "bookable_items"."id", 
                        "bookable_items"."title", 
                        "bookable_items"."summary", 
                        "bookable_items"."detail", 
                        "bookable_items"."rate", 
                        "bookable_items"."categoryId",
                        "bookable_items"."unitTime", 
                        "bookable_items"."location",
                        "categories"."name", 
                        "photos"."url",
                        "user"."email",
                        "user"."phoneNumber", 
                        "user"."companyName", 
                        "user"."address",
                        "user"."zipcode", 
                        "user"."websiteUrl"
                        FROM "bookable_items"
                        LEFT JOIN "categories" ON "categories"."id"="bookable_items"."categoryId"
                        LEFT JOIN "photos" ON "photos"."itemId"="bookable_items"."id"  
                        LEFT JOIN "user" ON "user".id="bookable_items"."clientId" 
                        WHERE "user".id= $1;
                        `
    const queryParams = [req.user.id]
    pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.error('ERROR getting bookable items according to client id in clientDetailItem.router', err);
        res.sendStatus(500);
    })
}) 



// Router to grab the specific bookable item on the client detail page 
router.get('/:id', (req, res) => {
    console.log('this is req.user', req.user);
    console.log('req.params are', req.params);
    const queryText = ` 
                        SELECT 
                        "bookable_items"."id", 
                        "bookable_items"."title", 
                        "bookable_items"."summary", 
                        "bookable_items"."detail", 
                        "bookable_items"."rate", 
                        "bookable_items"."categoryId",
                        "bookable_items"."unitTime", 
                        "bookable_items"."location",
                        "categories"."name", 
                        "photos"."url", 
                        "user"."email",
                        "user"."phoneNumber", 
                        "user"."companyName", 
                        "user"."address",
                        "user"."zipcode", 
                        "user"."websiteUrl"
                        FROM "bookable_items"
                        JOIN "categories" ON "categories"."id"="bookable_items"."categoryId"
                        JOIN "photos" ON "photos"."itemId"="bookable_items"."id"  
                        JOIN "user" ON "user"."id"="bookable_items"."clientId" 
                        WHERE "user".id= $1 AND "bookable_items"."id"= $2;
                        `;
    const queryParams = [req.user.id, req.params.id]
    pool.query(queryText, queryParams)
    .then((result) => {
        res.send(result.rows[0]);
    })
    .catch((err) => {
        console.error('ERROR in get/:id getting bookable item detail data in clientDetailItem.router', err);
        res.sendStatus(500);
    })
}) 
module.exports = router;