const router = require('express').Router()
const { Category } = require('../db').models

router
  .get('/', (req, res, next) => {
    Category.findAll({ order: ['name'] })
      .then(categories => res.send(categories))
      .catch(next)
  })
  .post('/', (req, res, next) => {
    Category.create(req.body)
      .then(category => res.send(category))
      .catch(next)
  })
  .put('/:id', (req, res, next) => {
    Category.findById(req.params.id)
      .then(category => category.update(req.body))
      .then(category => res.send(category))
      .catch(next)
  })
  .delete('/:id', (req, res, next) => {
    Category.findById(req.params.id)
      .then(category => category.destroy())
      .then(result => res.send(result))
      .catch(next)
  })

module.exports = router
