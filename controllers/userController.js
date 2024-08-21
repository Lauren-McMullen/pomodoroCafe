const User = require('../models/userModel');
const bcrypt = require('bcrypt');

async function createUser(username, name, email, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            username: username,
            password: hashedPassword,
            email: email});
        return user;
    } catch {
        return {};
    };
}

module.exports = {
    createUser
}