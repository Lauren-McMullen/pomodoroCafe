const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        minLength: 1,
        maxLength: 30,
    },
    name: {
        type: String,
        required: true, 
        minLength: 1,
        maxLength: 30,
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
        min: 0,
        default: 0},
    minutes: {
        type: Number,
        default: 0} 
});

module.exports = mongoose.model('User', userSchema);
