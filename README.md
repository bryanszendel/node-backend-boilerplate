# Node.js Backend Boilerplate

Boilerplate code for a basic CRUD API on table 'items' with the following db schema:

| id |     name    |     description    | category | image |      created_at     |      updated_at     |
|:--:|:-----------:|:------------------:|:--------:|:-----:|:-------------------:|:-------------------:|
|  1 | sample name | sample description |   cat1   |  URL  | YYYY-MM-DD HH:MM:SS | YYYY-MM-DD HH:MM:SS |


- Express, Knex, Sqlite3, PostgreSQL

# To Replicate
1. Clone this repository.
2. run `npm install` to install packages and dependencies.
3. Determine your preferred table name and modify `/items` folder and subsequent references to item/items. Currently, the single table is set as `/items`. The following files would need to be modified.
	 - [ ] **/*items*** ---> your prefered table_name
		 - [ ] **/items/*items*-model.js**
		 - [ ] **/items/*items*-router.js**
	 - [ ] **/knexfile.js** ---> set development.connection.filename to your new table_name
	 - [ ] **/database/migrations/20191126121200_*items*.js**
	 - [ ] **/seeds/01-*items*.js** ---> update the seed file name and contents
	 - [ ] **/api/server.js** ---> update line 6 to import your new file name
	 - [ ] **/api/middleware.js** ---> update references to 'items' table
4. Run `npm install knex -g` to install Knex globally.
5. Run `knex migrate:rollback` to reset any previous changes.
6. Run `knex migrate:latest` to setup the migration file.
7. Run `knex seed:run` to populate the sample seed data.
8. Run `npm run server` to start the local development server.
You should see `=== Server is listening on port PORT ===` in your console.
9. Make a GET request to http://localhost:6000/api/items and you should see an array of item data:
```json
[
  {
    "id": 1,
    "name": "A Node.js backend",
    "description": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "category": "Software",
    "image": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 2,
    "name": "Express.js endpoints",
    "description": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    "category": "Software",
    "image": "https://expressjs.com/images/express-facebook-share.png",
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 3,
    "name": "Knex.js db connector",
    "description": "Knex.js is a \"batteries included\" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.",
    "category": "Software",
    "image": "https://i.pinimg.com/originals/34/71/4b/34714b8ef3d6d9887936a942a613064e.png",
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 4,
    "name": "A Sqlite3/PostgreSQL db",
    "description": "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world.",
    "category": "Software",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png",
    "created_at": null,
    "updated_at": null
  }
]
```

# API Documentation

## GET  /api/items

Returns an array of item objects:
```json
[
  {
    "id": 1,
    "name": "A Node.js backend",
    "description": "Node.js® is a JavaScript runtime built on Chrome's V8 		JavaScript engine.",
    "category": "Software",
    "image": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 2,
    "name": "Express.js endpoints",
    "description": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    "category": "Software",
    "image": "https://expressjs.com/images/express-facebook-share.png",
    "created_at": null,
    "updated_at": null
  }
]
```

## GET  /api/items/:id

Receives an existing ID as a request parameter.

Returns a single item object:
```json
{
  "id": 1,
  "name": "A Node.js backend",
  "description": "Node.js® is a JavaScript runtime built on Chrome's V8 		JavaScript engine.",
  "category": "Software",
  "image": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
  "created_at": null,
  "updated_at": null
}
```

## POST  /api/items

Receives a request body:
```json
{
  "name": "sample name",
  "description": "sample description",
  "category": "cat1",
  "image": "imageURL"
}
```

Returns the created item object:
```json
{
  "message": "Successfully added the item.",
  "item": {
    "id": 1,
    "name": "A Node.js backend",
    "description": "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "category": "Software",
    "image": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
    "created_at": null,
    "updated_at": null
  }
}
```

## PUT  /api/items/:id

Receives an existing request parameter ID and a request body:
```json
{
  "name": "sample name UPDATE",
  "description": "sample description UPDATE",
  "category": "cat1 UPDATE",
  "image": "imageURL UPDATE"
}
```

Returns the updated item object:
```json
{
  "id": 1,
  "name": "sample name UPDATE",
  "description": "sample description UPDATE",
  "category": "cat1 UPDATE",
  "image": "imageURL UPDATE",
  "created_at": null,
  "updated_at": null
}
```

## DELETE  /api/items/:id

Receives an existing request parameter

Returns a success message:
```json
{
  "message": "Successfully removed the item."
}
```