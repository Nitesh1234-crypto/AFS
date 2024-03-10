const jwt = require("jsonwebtoken");
const secretKey="ishit"
module.exports.createJwtToken=(user)=>{
    return jwt.sign(user,secretKey,{expiresIn:"24h"})
}

module.exports.verifyToken=(req,res,next)=>{
    let token=req.cookies.token;
    let decode=jwt.verify(token,secretKey);
    console.log(decode);
    if(decode){
        req.user=decode;
       return next();
    }
    res.send("token invalid");
}