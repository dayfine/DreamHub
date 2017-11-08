const express = require('express'),
      app = express(),
      path = require('path'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      db = require('./db'),
      api = require('./api');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'public')))

app.use('/api', api);
app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.use((err, req, res, next)=> {
  console.log('ERROR MESSAGE:', err.message);
  res.status(err.status || 500).send(err);
});

const port = process.env.PORT || 3000;

//db.sync()
db.seed()
  .then(()=> app.listen(port, console.log(`listening on port ${port}`)));
