const userService = require('../services/signup');


async function createUser(req, res){
    try{
        const userDate = req.body;
        const user = await userService.createUser(userDate);
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

module.exports = {createUser}