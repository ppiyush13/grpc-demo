const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { credentials } = require('@grpc/grpc-js');
const { NewsService } = require('./NewsService');

/* grpc client */
const client = new NewsService('127.0.0.1:13001', credentials.createInsecure());

/* create express app */
const app = express();

/* register middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* register routes */
app.get('/news', (req, res) => {
  client.getAllNews({}, (err, news) => {
    res.json(news);
  });
});

app.post('/news', (req, res) => {
  client.addNews(req.body, (error, news) => {
    if (error) throw error;
    res.json(news);
  });
});

app.delete('/news/:id', (req, res) => {
  client.deleteNews(req.params, (error, news) => {
    if (error) throw error;
    res.json(news);
  });
});

/* start server */
app.listen(3000, () => {
  console.log('[http-server] Server started on port: 3000');
});
