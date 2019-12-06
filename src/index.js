const express = require('express');
const ical2json = require('ical2json');
const fetch = require('node-fetch');
const filterIcal = require('./icalFilter');

const port = process.env.PORT || 8080;

const app = express();

app.get('/ical/:token', (req, res) => {
  const token = req.params.token;
  const excludeWords = req.query.exclude.split(',');

  fetch(`https://data.sportlink.com/ical-person?token=${ token }`)
    .then(response => response.text())
    .then(icalText => ical2json.convert(icalText))
    .then(icalJson => filterIcal(icalJson, excludeWords))
    .then(icalJson => ical2json.revert(icalJson))
    .then(icalText => res.send(icalText))
    .catch(() => res.sendStatus(500));
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

process.on('SIGINT', () => {
  console.log('Gracefully shutting down your express server');
  
  server.close();
});