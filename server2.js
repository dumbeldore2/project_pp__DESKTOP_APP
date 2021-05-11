const mongoose = require('mongoose')
const path = 'mongodb+srv://DUMBELDORE:Judolessen12@netflixuserdb.jfos1.mongodb.net/project_pp?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(path ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
} 