
# Eazie-Book

## Description

_Duration: 2 Week Sprint_

The four of us started working on Eaziebook on February 28th. The project began with a week of scope and client communication, and 2 weeks of intense coding. We were asked to develop an app used to rent gear such as Boats, ATVs, jetskis, and more, with different authentication levels for renter, client, and administrator. The initial pitch from Hong and Dean, our clients, included their own wireframe, which made the planning process easier. One of our initial hurdles was figuring out the database structure between our items, users and photos. We settled on a 5 table structure, divided into user, renter_booking, photos, categories and bookable items. user joins to renter_booking, renter_booking and photos both join to bookable_items,  categories joins to bookable items, and bookable_items joins to the categories and user table. 

Once we got our database figured out we started cranking out dummy data and building out the app's functionality. Another one of our biggest hurdles was figuring out our sagas, specifically our get requests, since there were lots of funny SQL joins involved. The admin page was the most to build out since it required the most front-end content and the most data, followed by the client, and then the renter page. We also had issues getting multiple photos to upload and link to a bookable item id, and also had issues getting moment to work and format dates correctly, but we solved those issues.  Once we got our dummy data working, we started styling and learned the hard way that CSS and MUI don't always get along, and, as such, had to do quite a lot of tweaking, particularly with our input fields. A lot of our styling was made possible by MUI grids. Overall, we're very happy with our finished product and we believe all of our auth levels function the way they're supposed to. 



To see the fully functional site, please visit: https://eaziebook.herokuapp.com/#/home 

### Built with 



<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://sweetalert2.github.io/">
  <img src="https://sweetalert2.github.io/images/SweetAlert2.png" width="200" height="40px" alt="SweetAlert2">
</a>
<a href="https://aws.amazon.com/">
  <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" width="100" height="40px" alt="AWS">
</a>
<a href="https://momentjs.com/">
  <img src="https://avatars.githubusercontent.com/u/4129662?s=280&v=4" width="50" height="40px" alt="moment.js">
</a>
<a href="https://www.npmjs.com/package/multer-s3">
  <img src="https://miro.medium.com/max/400/1*CIolkR8u5UuZp5aJRPVzBg.png" width="50" height="40px" alt="multer-S3">
</a>

## Installation

Comprehensive guide to installation of the EazieBook application

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
1. Log in with the login information provided by Hong and Dean 
2. View a list of your bookable items upon logging in, click your desired item to view its details
3. Once on the detail page, browse through photos of your specified bookable items, or click return to bookable item list to navigate back to the home page. 
4. Should anything be updated, contact Hong. 
5. On the View List Nav Link -> Renter Info will bring the client to see a list of all renters that have rented your bookable items. 

- Admin (Hong and Dean only)
1. Upon logging in, the admin will view a complete list of every client in the database as well as their contact info and website url. For each client, the admin can delete or edit the credentials of any company. There is also a button on the row of each company name that brings the admin to a list view of all the assciated bookable items. 
2. Upon Hovering over Manage from the Nav Bar > and selecting 'Add a Client', the admin will be brought to the invite client form.
3. Upon Hovering over Manage from the Nav Bar > selection of 'Add bookable Item' the admin will be brought to a form for addition a new bookable item. This will add the corresponding item to the database. 
4. Select 'Open Bookable Items', and click 'Add Photo' to add multiple photos for a specific bookable item. 


## Acknowledgement
Thanks to our clients Hong Huie and Dean Adelman for pitching eaziebook to us. Also thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. We would like a special thanks to our instructor, Edan Schwartz, for teaching us and supporting us since day one. 



