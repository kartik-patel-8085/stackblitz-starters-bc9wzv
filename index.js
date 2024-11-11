const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullname', (req, res) => {
  let fname = req.query.firstName;
  let lname = req.query.lastName;
  res.send(fname + ' ' + lname);
});

app.get('/date', (req, res) => {
  let mm = req.query.month;
  let yy = req.query.year;
  res.send(mm + ', ' + yy);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  res.send('Namaste' + ', ' + name + '!');
});

app.get('/tatal-distance', (req, res) => {
  let dis1 = req.query.distance1;
  let dis2 = req.query.distance2;
  let total = String(Number(dis1) + Number(dis2));
  console.log(total);
  res.send(total);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
