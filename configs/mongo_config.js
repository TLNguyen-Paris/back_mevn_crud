require('dotenv').config()
const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Db connected");
})

db.on('error', (error) => {
    console.error(`Error : ${error}`);
})

module.exports = db