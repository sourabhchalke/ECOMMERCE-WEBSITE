const UserSchema = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserRegister = async (req, res) => {

    try {
        const { name, email, password, img } = req.body;

        console.log(req.body);

        const User = await UserSchema.findOne({ email });

        // Check user already exists or not
        if (User) { return res.status(400).send("User Already Exists") };
        // Convert plain password into hashed password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create new User 
        const NewUser = new UserSchema({
            name,
            email,
            password: hashPassword,
            img
        });

        // Save the record
       const createUser= await NewUser.save();

        // Create token using jsonwebtoken
        const token = jwt.sign({ id:createUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        console.log("Data Inserted Successfull");

        return res.status(201).json({ message: "User Registered Successfully", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }

}

module.exports = UserRegister;