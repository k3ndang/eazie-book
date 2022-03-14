/* const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

const router = express.Router();
 */
/* POST request to the database */
/* router.post('/', rejectUnauthenticated, (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const companyName = req.body.companyName;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipCode = req.body.zipCode;
    const websiteUrl = req.body.websiteUrl;
    

    const queryText = `
        INSERT INTO "user"
            ("firstName", "lastName", "username", "password", "email", "phoneNumber", "companyName", "address", "city", "state", "zipcode", "websiteUrl", "authLevel")
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 'client')
    `;

    pool.query(queryText,[
        firstName,
        lastName,
        username,
        password, 
        email,
        phoneNumber,
        companyName,
        address,
        city,
        state,
        zipCode,
        websiteUrl
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.error('ERROR in posting client invite data in router', err);
        res.sendStatus(500);
    })
})

module.exports = router; */

