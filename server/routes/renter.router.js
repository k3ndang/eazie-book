const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

//selects all fields for the client list (requires 3 part join)
//currently in the bookable item sage (note to fix that)
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

//grabs data for the renter info table, comes from the renter saga
router.get('/info', (req, res) => {
    const sqlText = `
    SELECT 
        "user"."username",
        "user"."email",
        "user"."phoneNumber",
        "bookable_items"."title" AS item_name,
        "bookable_items"."unitTime", 
        "renter_booking"."hours_book" AS time_booked
        FROM "user" 
LEFT JOIN "renter_booking"
	ON "renter_booking"."renterId" = "user"."id"
LEFT JOIN "bookable_items"
	ON "renter_booking"."bookableId" = "bookable_items"."id"
    WHERE "user"."authLevel" = 'renter';
    `

    pool.query(sqlText)
        .then((result) => {
            console.log('result is', result.rows)

            res.send(result.rows)
        })
        .catch(err => {
            console.log('infoQuery error', err);
            res.sendStatus(500)
            
        })
})


router.post('/', (req, res) => {
    console.log('renter posting', req.body)
    let bookableItem = req.body.selectedItem;
    let clientId = req.body.clientId;
    let dateTime = req.body.date;
    let bookingDuration = req.body.hourRenting;

    const sqlText = `
        INSERT INTO "renter_booking"
        ("startDate", "hours_book", "renterId", "bookableId")
        VALUES
        ($1, $2, $3, $4);
    `;

    const sqlParams = [
        dateTime,
        bookingDuration,
        clientId,
        bookableItem.id
    ]

    pool.query(sqlText, sqlParams)
        .then(dbRes => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.error('ERROR in confirming booking', err)
            res.sendStatus(500)
        })
})

module.exports = router;