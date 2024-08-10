const JWT = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId,res) =>{
    const token = JWT.sign({userId},"scrate_of_jwt",{
        expiresIn: '15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly:true,
        sameSite:"strict",
    })
}

module.exports = {generateTokenAndSetCookie}