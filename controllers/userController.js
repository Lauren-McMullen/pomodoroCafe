const User = require('../models/userModel');
const bcrypt = require('bcrypt');

async function createUser(username, name, email, password, role) {
    //TODO
    console.log('...making user...');
}

module.exports = {
    createUser
}