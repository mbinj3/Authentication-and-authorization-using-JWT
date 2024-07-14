const User = require('../model/user');
const bcrypt = require('bcrypt');

async function createUser(userDate){
    const {name, email, password} = userDate;
    const hashedPassword = await bcrypt.hash(password,10);
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        role: "customer"
    });
    const savedUser = await createdUser.save();
    return savedUser
};

module.exports = {createUser}