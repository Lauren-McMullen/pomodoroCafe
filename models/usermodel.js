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
    Password: {
        type: String, 
        rquired: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        validator: v => v === 'developer' || v === 'designer',
        message: props => `${props} is not a valid role`
    }

});

module.exports = mongoose.model('User', userSchema);
