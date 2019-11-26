const db = require('../database/db-config.js');

module.exports = {
  find,
}

function find() {
  return db('items')
}