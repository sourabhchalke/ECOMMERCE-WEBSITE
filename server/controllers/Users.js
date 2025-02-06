const UserSchema = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

  const UserRegister = async(req,res,next)=>{

    try{
        const {name,email,password}=req.body;
        console.log(name);
        console.log(req.body);

        const User = await UserSchema.findOne({email});

        console.log(User);

        if(User){return res.status(400).send("User Already Exists")};

        const hashPassword = await bcrypt.hash(password,10);
        console.log(hashPassword);

        






        next();
    }catch(error){
        return res.status(400).send(error);
    }

    
}

module.exports=UserRegister;