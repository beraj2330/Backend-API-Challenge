const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');
const apicache = require('apicache');
const { route1, route2, error } = require('./control/control.js')

// Sets up cache for requests
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/public')));


// Route 1
// Second argument is for cache
// Cache was benchmarked seeing the request times in the terminal, with and without the cache.
// The response times reduce with subsequent calls while using the cache and they do not reduce without the cache as expected.
// Both routes were benchmarked and visualized against the sample data using Postman

app.get('/api/ping', cache('60 minutes'), route1);

// Route 2
// Second argument is for cache
// Tags are a required parameter, while sortBy and direction are optional.
// SortBy and direction default to id and asc, respectively

app.get('/api/posts/:tags/:sortBy?/:direction?', cache('60 minutes'), route2);

//Error Response
//If Tags parameter is not mentioned
app.get('/api/posts', cache('60 minutes'), error);




app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});