const User = require('../models/userModel');
const bcrypt = require('bcrypt');

async function createUser(username, name, email, password) {
    try {

        //Username already taken
        if(await User.findOne({username: username})) {
            return "Username taken. Please pick a new username.";
        };

        //email already in use
        if(await User.findOne({email: email})) {
            return "This email is already in use. Please try again.";
        };

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name: name,
            username: username,
            password: hashedPassword,
            email: email});
        return "";
    } catch {
        return "Server error. Please try again.";
    };
}

module.exports = {
    createUser
}