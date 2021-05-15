const Mongoose = require('mongoose')
const mongo = require('./server2')
const shema = require('./shema1')

var data = fs.readFileSync('./json1newitems.json');
var json1 = {};
json1 = JSON.parse(data);