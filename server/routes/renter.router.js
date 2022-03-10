const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
const sqlText = `
SELECT
	"user"."companyName",
	"user"."email",
	"user"."phoneNumber",
	"bookable_items"."unitTime",
	"bookable_items"."title" AS "item_name",
	"renter_booking"."hours_book"
FROM "user"
LEFT JOIN "bookable_items"
	ON "bookable_items"."clientId" = "user"."id"
LEFT JOIN "renter_booking"
	ON "renter_booking"."bookableId" = "bookable_items"."id"
WHERE "renter_booking"."renterId" = $1;
`

const sqlParams = [req.user.id]

pool.query(sqlText, sqlParams)
    .then((result) => {
        console.log('result is', result.rows);

        res.send(result.rows)
    })
    .catch(err => {
        console.log('renterQuery error', err);
        res.sendStatus(500)
    })
})


module.exports = router;