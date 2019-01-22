const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema & model
const DbSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Name field required']
    },
    lastname: {
        type: String,
        required: [true, 'Name field required']
    },
    username: {
        type: String,
        required: [true, 'Name field required']
    },
    password: {
        type: String,
        required: [true, 'Name field required']
    },
    idstatus: {
        type: String
    }

    //add geo location
});

const UserSchema = mongoose.model('users', DbSchema); // from collections

module.exports = UserSchema; 
