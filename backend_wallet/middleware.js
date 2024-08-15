const {JWt_SECRET}= require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bareer ')){
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,JWt_SECRET);
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            res.status(403).json({ma:"hah"})
        }
    }
    catch{
        return res.status(403).json({
            message:"22"
        });
    }

}

module.exports = {
    authMiddleware
}