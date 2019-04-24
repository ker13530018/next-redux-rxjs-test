const express = require('express')
const nextJS = require('next')
const { createServer } = require('http')

const dev = process.env.NODE_ENV !== 'production'
const app = nextJS({ dev })
const handle = app.getRequestHandler()
const apiRoute = require('./api')

app.prepare().then(() => {
  const server = express()

  server.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*')
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  // apply api route
  server.use('/api', apiRoute)

  // apply custom page route
  // https://github.com/haochuan/nextjs-examples/blob/92eca70377457cd60f0318eb50edfcf60bde25df/client-server-routes/server/index.js#L20
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
