const { model, Schema } = require('mongoose');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 5)


const UserModel = model('user', Schema({
    "ID": {
        type: Number,
        default: () => nanoid(),
        required: true,
    },
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "department": {
        type: String,
        required: true
    }
}))

module.exports = { UserModel };