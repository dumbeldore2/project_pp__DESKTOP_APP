const Mongoose = require('mongoose')
const mongo = require('./server2')
const shema = require('./shema1')

const fs = require('fs');
var data = fs.readFileSync('./json2dbitmes.json');
var json2 = {};
json2 = JSON.parse(data);


const connectToMongoDb = async () => {
    await mongo().then(async (Mongoose) => {
        try {

            /*const lol = {
                account: "lol",
                date: "2jan",
                object: "facebook",
                email: "yago.engels@gmail.com",
                password: "ldsk,fm,dvsd"
            }
            await new shema(lol).save()
            */


            const dbData = await shema.find({});
            //console.log(dbData);
            //console.log(Object.keys(json2).length);

            if(dbData.length != Object.keys(json2).length){
                console.log("de tities dont equal the assies");
                json2 = dbData;
                console.log(json2);
            } else {
                console.log("hehehehe");
            }
            //console.log(dbData.slice(-1)[0].object)
            //console.log(dbData.slice(-1)[0].date)

            //list.naam = dbData.slice(-1)[0].naam;
            //list.date = dbData.slice(-1)[0].date;
        
            //console.log(list)
            //var dataCombo = JSON.stringify(list);
            //fs.writeFileSync('./combo.json',dataCombo,finish)

            function finish(err){
                console.log("gg")
            }
        } finally {
            Mongoose.connection.close(); 
        }
    })
}

connectToMongoDb();