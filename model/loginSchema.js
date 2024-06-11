const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const loginSchema = new Schema({
    adminId: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = model('login', loginSchema);