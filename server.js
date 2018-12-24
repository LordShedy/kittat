'use strict';
/* importing required packages */
const http = require('http');
const https = require('https');
const express = require('express');

/* requiring other project files */
const routes = require('./routes.js');

/* creating express app */
const app = express();

/* starting HTTP server */
const httpServer = http.createServer((req, res) => {
  res.writeHead(301, {"Location" : "https://" + req.headers['host'] + req.url});
  res.end();
}).listen(80, () => console.log('HTTP server running on port 80'));

/* files open to public */
app.use(express.static('public'));

/* setting up view engine to EJS*/
app.set('view engine', 'ejs');

/* main page */
app.get('/', routes.index);
app.get('/index*', routes.r_index);

/* history page */
app.get('/history', routes.history);
app.get('/history*', routes.r_history);

/* statistics page */
app.get('/statistics', routes.statistics);
app.get('/statistics*', routes.r_statistics);
