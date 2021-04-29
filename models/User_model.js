const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dateCreate:{
        type:Date,
        required:true,
        default: Date.now
    }
})

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel;