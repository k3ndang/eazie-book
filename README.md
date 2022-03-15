
# Eazie-Book
An app built to simplify booking recreational vehicles and leisure boats for small businesses

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).



## Prerequisites

Before you get started, make sure to run "npm install" on your computer


## Create database and table

Create a new database called `eazie_book` and Copy / paste our database.sql file to get the table values 

If you would like to name your database something else, you will need to change `eazie_book` to the name of your new database name in `server/modules/pool.js`


## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
