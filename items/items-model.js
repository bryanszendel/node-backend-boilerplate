const db = require('../database/db-config.js');

module.exports = {
  find,
  findById,
  add,
  edit,
  remove
}

function find() {
  return db('items')
}

async function findById(id) {
  await db('items').where('id', id).first()
}

function add(item) {
  return db('items').insert(item)
}

function edit(id, item) {
  return db('items')
}

function remove(id) {
  return db('items')
}