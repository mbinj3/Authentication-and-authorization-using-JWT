const jwt = require('jsonwebtoken');
const secretKey = require('../configuration/jwtConfig'); 


function authenticateToken(req, res, next){
    const authHeader = req.header("Authorization");
    if(!authHeader){
        return res.status(401).json({message: "Unauthorized: missing token"})
    }
    const [bearer, token] = authHeader.split(" ");
    if(bearer !== "Bearer" || !token){
        res.status(401).json({meassage: "Unauthorized: Invalid token format"})
    }
    jwt.verify(token, secretKey, (err, user) => {
        if(err){
            return res.status(403).json({message: "Forbidden: Invalid token"});
        }
        req.user = user;
        next();
    })
}

function verifyToken(token){
    jwt.verify(token, secretKey)
}

module.exports = {authenticateToken, verifyToken};