const jwt = require('jsonwebtoken');

const verifyToken = async(req,res,next)=>{
    try{

        if(!req.headers.authorization){
            return res.status(400).send("You are not Authenticated");
        }

        const token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(400).send("You are not Authenticated");
        }

        const decode = jwt.verify(token,process.env.JWT);

        req.user=decode;

        return next();

    }catch(error){
        console.log(error);
        return res.status(400).send("Something went wrong");
    }
}

module.exports=verifyToken;