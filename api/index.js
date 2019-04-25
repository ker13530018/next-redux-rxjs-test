const express = require('express')

const router = express.Router()

const content = require('./content')

router.use((req, res, next) => {
  console.log('request path :', req.path)
  next()
})

router.get('/server', (req, res) => {
  return res.status(200).json({ message: 'Hello world from server' })
})

router.get('/script', (req, res) => {
  return res.status(200).json({ message: 'Hello world from script' })
})

// apply content router
router.use(content)

module.exports = router
