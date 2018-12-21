const request = require('request');
const cheerio = require('cheerio');
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const axios = require('axios')
const SERVER_CONFIGS = require('./constants/server');
const cors = require('cors');
const CORS_WHITELIST = require('./constants/frontend');

const configureServer = require('./server');
const configureRoutes = require('./routes');




// const mustacheExpress = require('mustache-express') // example for using server side views

// I mentioned this bit of code already, just make sure that it's in the server once at the top of the file
/*
if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
} */

const app = express()
configureServer(app);
configureRoutes(app);

// this is so that express can parse the incoming `req.body` into json, somewhere at the top of the server file:
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// if the app is using server side templating like mustache:
// make sure to create a views folder
// app.engine('mustache', mustacheExpress())
// app.set('views', './views')
// app.set('view engine', 'mustache')

// set usefull headers:



app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
  )
  next()
})

// to prevent security threats, Helmet will set headers to sensible defaults, and allows tweaking them as needed:

// ROUTES GO HERE
app.get('/api/products/:category', function (req, res, next) {

  axios.get(`https://www.sephora.com/api/catalog/categories/${req.params.category}/products?currentPage=1&pageSize=300&content=true&includeRegionsMap=true`).then(({data}) => {
    if(data && data.products) {

      res.json({ products: data.products })
    }
  })
})


// at the bottom of the server file, set the port like this, so that heroku can set the port when the server is being hosted there
const PORT = 3001
app.listen(PORT, function () {
  console.log('\n\n===== Server Started on port ' + PORT + ' =====\n\n')
})
