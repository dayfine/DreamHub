const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const db = require('./db')
const port = process.env.PORT || 3000
let indexPath

if (process.env.NODE_ENV !== 'production') {
  require('../secrets')
  indexPath = path.join(__dirname, '..', 'client', 'public', 'index.html')
} else {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
  indexPath = path.join(__dirname, '..', 'client', 'build', 'index.html')
}

// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz'
//   res.set('Content-Encoding', 'gzip')
//   next()
// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/public', express.static(path.join(__dirname, '..', 'client', 'public')))

app.use('/api', require('./api'))

app.get('*', (req, res, next) => res.sendFile(indexPath))

app.use((req, res, next) => {
  const error = new Error('page not found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  if (req.headers['content-type'] &&
    req.headers['content-type'].includes('application/json')
  ) {
    return res.status(err.status).send({message: err.message})
  }
  return res.status(err.status || 500).send(err)
})

db.sync()
  .then(() => db.seed())
  .then(() => {
    console.log('db synced')
    app.listen(port, () => console.log(`listening on port ${port}`))
  })
