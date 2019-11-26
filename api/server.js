const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//IMPORTED ROUTES HERE



const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

//HIGH LEVEL ROUTES



module.exports = server;