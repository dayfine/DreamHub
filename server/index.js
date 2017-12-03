const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  cors = require('cors'),
  path = require('path'),
  db = require('./db'),
  port = process.env.PORT || 3001

if (process.env.NODE_ENV !== 'production') {
  require('../secrets')
} else {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
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
app.use('/public', express.static(path.join(__dirname, '..', 'client', 'public')))

app.use('/api', require('./api'))

const indexPath = path.join(__dirname, '..', 'client', 'build', 'index.html')
app.get('*', (req, res, next) => res.sendFile(indexPath))

app.use((req, res, next) => {
  const error = new Error('page not found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  if (req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
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
