const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String , 
        required: true
    }

}, {timestamps : true})

const Userdata = mongoose.model('userdata',UserSchema);
module.exports = Userdata;