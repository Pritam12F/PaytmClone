const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("./config");

function authMiddleware(req, res, next){
    
    const auth=req.body.authorization;

    if(!auth || !auth.startsWith('Bearer ')){
        return res.status(403).json({message: "access denied"});
    }
    const token=auth.split(" ")[1];

    try{
        const decoded = jwt.verify(actualToken, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch(e){
        res.status(403).json({
            message: "Access denied"
        })
    }
}

module.exports = {authMiddleware}