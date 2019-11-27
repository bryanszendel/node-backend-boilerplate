const router = require('express').Router();
const Items = require('./items-model.js');
const {
  validateItemId,
  validatePostReqBody
} = require('../api/middleware.js')

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

router.get('/:id', validateItemId, (req, res) => {
  const id = req.params.id
  Items.findById(id)
    .then(item => {
      res.status(200).json(item)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the item.' })
      console.log(err)
    })
})

router.post('/', validatePostReqBody, (req, res) => {
  const item = req.body
  Items.add(item)
    .then(id => {
      [newItemId] = id
      return Items.findById(newItemId)
    })
    .then(item => {
      res.status(201).json({ message: 'Successfully added the item.', item})
    })
    .catch(err => {
      res.status(500).json({ message: 'Error adding the item.' })
    })
})

router.put('/:id', validateItemId, (req, res) => {
  const id = req.params.id
  const updated = req.body
  Items.edit(id, updated)
    .then(updatedItemId => {
      return Items.findById(updatedItemId)
    })
    .then(updated => {
      res.status(201).json(updated)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error updating the item.' })
    })
})

router.delete('/:id', validateItemId, (req, res) => {
  const id = req.params.id
  Items.remove(id)
    .then(deleted => {
      res.status(200).json({ message: 'Successfully removed the item.' })
    })
    .catch(err => {
      res.status(500).json({ message: 'Error removing the item.' })
    })
})

module.exports = router;