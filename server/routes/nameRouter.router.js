const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// Autocomplete needs the list of bookable item titles as "label", 
// the id will register as the bookable item id  
router.get('/', (req, res) => {
    const sqlText = 
    `SELECT "title" as "label", 
    "id"  
    FROM "bookable_items"
    ORDER BY "title" ASC;`

    pool.query(sqlText)
        .then((result) => {
            console.log('result is', result.rows);
            
            res.send(result.rows)
        })
        .catch(err => {
            console.log('error on retrieving title names from category Autocomplete', err);
            res.sendStatus(500)
        })
})

module.exports = router;
