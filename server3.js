const Mongoose = require('mongoose')
const mongo = require('./server2')
const shema = require('./shema1')
const fs = require('fs');

var data = fs.readFileSync('./json1newitems.json');
var json1 = {};
json1 = JSON.parse(data);

var list = {};
list.account = "account1";
list.date = "een random datum";
list.object = json1.naam;
list.email = json1.email;
list.password = json1.password;

//console.log(json1);
//console.log(list);

if(Object.keys(json1).length == 0){
    console.log("lol tis leeg");
} else {
    console.log("lol tis ni leeg");
}


const connectToMongoDb = async () => {
    await mongo().then(async (Mongoose) => {
        try {
            const dbData = await shema.find({});
            console.log(dbData);
        } finally {
            Mongoose.connection.close(); 
        }
    })
}

connectToMongoDb();