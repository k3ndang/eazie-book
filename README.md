![License](https://img.shields.io/github/license/K3ndang/eazie-book.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/K3ndang/eazie-book.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/K3ndang/eazie-book.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/K3ndang/eazie-book.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/K3ndang/eazie-book.svg?style=for-the-badge)


# EazieBook

[https://yourapp.herokuapp.com/](https://yourapp.herokuapp.com/)

## Overview

EazieBook is an app used to rent gear such as Boats, ATVs, jetskis, and more, with different authentication levels for renter, client, and administrator. The functionality of the different authentication levels is broken down below. 

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

## Screenshots


![screenshot1](/screenshots/screenshot1.png)
![screenshot2](/screenshots/screenshot2.png)
![screenshot3](/screenshots/screenshot3.png)
![screenshot4](/screenshots/screenshot4.png)



## Running Locally

1. Create a database named `eazie_book`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Environment Variables

List out environment variables needed for your app. Where can they find those values? (eg. in the handoff doc) What is each variable needed for?

## Deployment

To make changes, program the changes manually on the eaziebook github and re-deploy the app using your heroku account. 


## External Services (if relevant)

We used AWS for photo storage in conjunction with multer s3. Relevant code is in the photos.router.js file. 

## Built With

This application uses the following technologies:

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://sweetalert2.github.io/">
  <img src="https://sweetalert2.github.io/images/SweetAlert2.png" width="150" height="40px" alt="SweetAlert2">
</a>
<a href="https://aws.amazon.com/">
  <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" width="100" height="40px" alt="AWS"> 
 <a href="https://momentjs.com/">
  <img src="https://avatars.githubusercontent.com/u/4129662?s=280&v=4" width="50" height="40px" alt="moment.js">
</a>
<a href="https://www.npmjs.com/package/multer-s3">
  <img src="https://miro.medium.com/max/400/1*CIolkR8u5UuZp5aJRPVzBg.png" width="50" height="40px" alt="multer-S3">
</a>

(a full list of dependencies can be found in `package.json`)

## Acknowledgements

Thanks to our clients Hong and Dean for giving us the idea for Eaziebook! We would also like to thank Prime Academy and our instructor, Edan Schwartz, for providing us with a space that allowed us to complete this project. 

