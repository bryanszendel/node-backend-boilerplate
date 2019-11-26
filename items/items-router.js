const router = require('express').Router();

const Items = require('./items-model.js');

router.get('/', (req, res) => {
  Items.find()
    .then(items => {
      res.status(200).json(items)
    })
    .catch(err => {
      res.status(500).json({message: 'Error retrieving the items.'})
      console.log(err)
    })
})

module.exports = router;