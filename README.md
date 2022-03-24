
# Eazie-Book

## Description

_Duration: 2 Week Sprint_

The four of us started working on Eaziebook on February 28th. The project began with a week of scope and client communication, and 2 weeks of intense coding. We were asked to develop an app used to rent gear such as Boats, ATVs, jetskis, and more, with different authentication levels for renter, client, and administrator. The initial pitch from Hong and Dean, our clients, included their own wireframe, which made the planning process easier. One of our initial hurdles was figuring out the database structure between our items, users and photos. We settled on a 5 table structure, divided into user, renter_booking, photos, categories and bookable items. user joins to renter_booking, renter_booking and photos both join to bookable_items,  categories joins to bookable items, and bookable_items joins to the categories and user table. 

Once we got our database figured out we started cranking out dummy data and building out the app's functionality. Another one of our biggest hurdles was figuring out our sagas, specifically our get requests, since there were lots of funny SQL joins involved. The admin page was the most to build out since it required the most front-end content and the most data, followed by the client, and then the renter page. We also had issues getting multiple photos to upload and link to a bookable item id, and also had issues getting moment to work and format dates correctly, but we solved those issues.  Once we got our dummy data working, we started styling and learned the hard way that CSS and MUI don't always get along, and, as such, had to do quite a lot of tweaking, particularly with our input fields. A lot of our styling was made possible by MUI grids. Overall, we're very happy with our finished product and we believe all of our auth levels function the way they're supposed to. 



To see the fully functional site, please visit: https://eaziebook.herokuapp.com/#/home 

### Built with 

- [Node.js](https://nodejs.org/en/)
- [moment.js] (https://momentjs.com/)
- [multerS3] (https://www.npmjs.com/package/multer-s3)
- [AWS] (https://aws.amazon.com/)
- [ReactJs] (https://reactjs.org/)
- [MaterialUi] (https://mui.com/)
- [Redux] (https://redux.js.org/)
- [SweetAlert2] (https://sweetalert2.github.io/)
- [PostgreSQL]  (https://www.postgresql.org/) 

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `eazie_book`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

- Renter
1. Log in or register as a renter
2. Click on watercraft or atv
3. Click on the type of item you want to book
4. Look through the list of items in a category and click full detail on your desired item
5. Select desired date, time and amount of hours to rent your item, then select book now.
6. Review your information and press confirm!
7. Navigate back to the home page to book another item!

- Client
1. Log in with your auth information provided by hong and dean 
2. View a list of your bookable items upon logging in, click your desired item to view its details
3. Once on the detail page, click the right and left arrows to cycle through photos of your specified bookable items, or click return to bookable item list to navigate back to the home page. 
4. Click View List > Renter Info to see a list of everyone who's rented your bookable items. 

- Admin (Hong and Dean only)
1. Upon logging in you'll see a complete list of every client in the database as well as their contact info and website url. For each client, there's also a button which allows you to see all their associated bookable items, edit the client's info, or delete the client from the database altogether. 
2. Select Manage > Add a Client to invoke the invite client form, which allows you to input client info and add it to the database. 
3. Select Manage > Add bookable item to invoke the bookable item which allows you to add a bookable item to the database and assign it to a specific category. 
4. Select open bookable items, and click add photo to add multiple photos to a specific bookable item. 


## Acknowledgement
Thanks to our clients Hong Huie and Dean Adelman for pitching eaziebook to us. Also thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. We would like a special thanks to our instructor, Edan Schwartz, for teaching us and supporting us since day one. 



