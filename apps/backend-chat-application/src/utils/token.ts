const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = async function (res:any, userId:any) {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn: '15d'});
    res.cookie('jwt', token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite:"strict",
        secure: process.env.NODE_ENV !== 'development'
    });
    return token;
}

module.exports = {generateTokenAndSetCookie};