const express = require('express')

const router = express.Router()

router.get('/server', (req, res) => {
  console.log(req.baseUrl)
  return res.status(200).json({ message: 'Hello world from server' })
})

router.get('/script', (req, res) => {
  // console.log(req.baseUrl)
  return res.status(200).json({ message: 'Hello world from script' })
})

module.exports = router
