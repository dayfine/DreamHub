const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  cors = require('cors'),
  path = require('path'),
  ejs = require('ejs');
  db = require('./db'),
  port = process.env.PORT || 3001

if (process.env.NODE_ENV !== 'production') {
  require('../secrets')
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/public', express.static(path.join(__dirname, '../client/public')))

app.use('/api', require('./api'))

// set up ejs view engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, '..', 'public'));

app.get('/', (req, res, next) => res.render('index', { MAPS_API_KEY: process.env.MAPS_API_KEY }));

app.use((req, res, next) => {
  const error = new Error('page not found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    return res.status(err.status).send({error: {message: err.message}})
  }
  return res.status(err.status || 500).send(err)
})

if (process.env.NODE_ENV !== 'production') {
  require('../secrets')
  // const proxy = require('express-http-proxy')
  // app.use('/*', proxy('http://localhost:3000'))
} else {
  // Only serve build directory in production
  app.use(express.static('client/build'))
}

db.sync()
  .then(() => db.seed())
  .then(() => {
    console.log('db synced')
    app.listen(port, () => console.log(`listening on port ${port}`))
  })
