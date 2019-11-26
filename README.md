NODE.JS BACKEND BOILERPLATE

This project will show you how to setup a basic API that will perform CRUD operations on your items of choice.

#Setup your environment
run 'npm install' to retrieve npm packages and dependencies

create a .env file in your root directory. add the following vars:
-PORT (set to your favorite port number)
-NODE_ENV (set to 'development')

Rename the folder in your root directory called 'items' to the name of the actual items you'll be performing CRUD operations on or simply keep it all named 'items'. If you are tracking users, perhaps rename the folder to 'users'. This folder will contain all of your primary endpoints for your 'items'. (OPTIONAL-you may want to rename each file and/or variable with the items folder that contains the word, 'items' such as 'items-model.js' and 'items-router.js' to help keep it all clean, consistent, and organized.) 

at this point, run this command in your terminal - 'npm run server' and you should see the message in the console: '=== Server listening on port PORT ==='

#Create and Connect your Database


