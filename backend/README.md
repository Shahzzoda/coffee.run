# Coffee.run(); Backend


## Prerequisites

1. Install the database (Postgres)

For mac, run `brew install postgresql` on terminal

2. Create a database user for the project. Must match config.json so DB can connect properly:

`createuser -P -s -e coffeerun`

3. When prompted for a password type `password`

4. After creating the user, create the database:

`createdb -h localhost -U coffeerun coffeerun_db`

More information can be found at this [link](https://github.com/CUNYTechPrep/ctp2017/blob/master/guides/installing-postgresql.md).

## How to run

Note: Make sure postgresql is running

### Method 1:

1. Clone this repository.
2. `cd backend`
3. `npm install`
4. Run the migrations `node_modules/.bin/sequelize db:migrate`. This will create the tables in our database.
5. Run the seeders `node_modules/.bin/sequelize db:seed:all`. This will create a mock data in our tables.
6. Run the scraping tool. Navigate to scraper directory and run `node scrape.js`
7. `npm start`

### Method 2:

1. Clone this repository.
2. `cd backend`
3. `npm start`
4. Run the scraping tool. Navigate to scraper directory and run `node scrape.js`

## Dependencies

1. Express
2. Passport
3. Postgres
4. Sequelize

## Helpful Resources

[CTP Backend Starter Code](https://github.com/CUNYTechPrep/week-06-projects/tree/master/backend-starter-code)




## Explanations

- `/config/config.json`
    + This file contains the credentials for connecting to your postgres database. You need to make sure these details match your DB setup.
- `/controllers`
    + This is where you should store all the logic handling URL routes and business logic for your app.
    + `index.js` is where you load up the different files
    + You can write your controller code in many styles. I've provided you two options in the `home.js` and the `alt.js` files. Pick one style and use it for all of your controllers. This is really a matter of preference.
- `/models`
    + This is where your sequelize models will go.
    + `index.js`: you **do not** have to modify this file. This file connects to the Postgres database for you, loads up all models in the folder, and sets up all associations.
- `app.js`
    + This file sets up the basic packages for our projects. Feel free to add more as you see fit.
    + This file already loads up your controllers, so no additional loading is necessary for that to work.

## Optional

- If you want to add views and handlebars to your server side
    + Uncomment the corresponding code in `app.js`
    + Add a `/views` folder and the appropriate templates



