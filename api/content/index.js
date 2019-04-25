const express = require('express')

const router = express.Router()

const { getContentBySlug } = require('./controller')

router.get('/contents/:slug', getContentBySlug)

module.exports = router
