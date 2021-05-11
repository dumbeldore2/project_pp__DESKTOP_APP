const Mongoose = require('mongoose')
const mongo = require('./server2')
const shema = require('./shema1')


const connectToMongoDb = async () => {
    await mongo().then(async (Mongoose) => {
        try {

            const dbData = await shema.find({});
            //console.log(object.date)
            console.log(dbData.slice(-1).length)

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