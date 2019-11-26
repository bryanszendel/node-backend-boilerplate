const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//IMPORTED ROUTES HERE
const itemsRouter = require('../items/items-router.js')


const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

//USE ROUTES HERE
server.use('/api/items', itemsRouter)


module.exports = server;