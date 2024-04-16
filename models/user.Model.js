const { model, Schema } = require('mongoose');

const UserModel = model('user', Schema({
    "ID": Number,
    "FirstName": String,
    "LastName": String,
    "Department": String
}))

module.exports={UserModel};