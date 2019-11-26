const db = require('../database/db-config.js');
const Items = require('../items/items-model.js');

module.exports = {
  validateItemId
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