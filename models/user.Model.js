const { model, Schema } = require('mongoose');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 5)


const UserModel = model('user', Schema({
    "ID": {
        type: Number,
        default: () => nanoid(),
        required: true,
    },
    "FirstName": {
        type: String,
        required: true
    },
    "LastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "Department": {
        type: String,
        required: true
    }
}))

module.exports = { UserModel };