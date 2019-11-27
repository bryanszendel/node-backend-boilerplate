const db = require('../database/db-config.js');
const Items = require('../items/items-model.js');

module.exports = {
  validateItemId,
  validatePostReqBody
}

function validateItemId(req, res, next) {
  Items.findById(req.params.id)
    .then(response => {
      if (response) {
        res.id = response
        next()
      } else {
        res.status(404).json({ message: 'No item found with that ID.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Error finding the item ID.' })
    })
}

function validatePostReqBody(req, res, next) {
  if (req.body.name) {
    if (req.body.description) {
      if (req.body.category) {
        next()
      } else {
        res.status(404).json({ message: 'Category field is required.'})
      }
    } else {
      res.status(404).json({ message: 'Description field is required.'})
    }
  } else {
    res.status(404).json({ message: 'Name field is required.'})
  }
}