const Mongoose = require('mongoose')
const mongo = require('./server2')
const shema = require('./shema1')
const fs = require('fs');

var data = fs.readFileSync('./json1newitems.json');
var json1 = {};
json1 = JSON.parse(data);

console.log(json1);