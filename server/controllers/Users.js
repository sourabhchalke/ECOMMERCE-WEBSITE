const UserSchema = require('../models/Users');
const OrderSchema = require('../models/Orders');
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
        const createUser = await NewUser.save();

        // Create token using jsonwebtoken
        const token = jwt.sign({ id: createUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        console.log("Data Inserted Successfull");

        return res.status(201).json({ message: "User Registered Successfully", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }

}

const UserLogin = async (req, res) => {

    try {
        const { email, password } = req.body;

        console.log(req.body);

        const ExistsUser = await UserSchema.findOne({ email });

        // Check user already exists or not
        if (!ExistsUser) { return res.status(400).send("User Not Found") };

        const isPasswordMatch = await bcrypt.compare(password, ExistsUser.password);

        if (!isPasswordMatch) {
            return res.status(404).send("Incorect Password");
        }

        // Create token using jsonwebtoken
        const token = jwt.sign({ id: ExistsUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        console.log("Login Successfull");

        return res.status(201).json({ message: "User Login Successfully", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });

    }
};

// Cart
const AddToCart = async (req, res) => {
    try {

        const { productId, quantity } = req.body;
        console.log(productId, quantity);

        const userJWT = req.user;
        const user = await UserSchema.findById(userJWT.id);

        const existingCartItemIndex = user.cart.findIndex((item) => item.product.equals(productId));

        if (existingCartItemIndex !== -1) {
            // Product is already in the cart, update the quantity
            user.cart[existingCartItemIndex].quantity += quantity;
        } else {
            // Product is not in the cart, add it
            user.cart.push({ product: productId, quantity });
        }

        await user.save();

        return res.status(200).send("Product added to cart successfully", user);

    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

const RemoveFromCart = async (req, res) => {
    try {

        const { productId, quantity } = req.body;
        console.log(productId, quantity);

        const userJWT = req.user;
        const user = await UserSchema.findById(userJWT.id);

        if (!user) {
            return res.status(400).send("User Not Found");
        }

        const productIndex = user.cart.findIndex((item) => item.product.equals(productId));

        if (productIndex !== -1) {
            if (quantity && quantity > 0) {
                user.cart[productIndex].quantity -= quantity;

                if (user.cart[productIndex].quantity <= 0) {
                    user.cart.splice(productIndex, 1);
                }

            } else {
                user.cart.splice(productIndex, 1);
            }

            await user.save();

            return res.status(200).send("Product quantity updated in cart");
        }

    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

const getAllCartItems = async (req, res) => {
    try {

        const userJWT = req.user;
        const user = await UserSchema.findById(userJWT.id).populate({
            path: "cart.product",
            model: "Products",
        });

        const cartItems = user.cart;

        return res.status(200).send(cartItems);

    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

// Orders
const PlaceOrder = async (req, res) => {
    try {

        const {products,address,totalAmount}=req.body;

        const userJWT = req.user;
         const user=await UserSchema.findById(userJWT.id);

         const order = new OrderSchema({
            products,
            user:user._id,
            total_amount:totalAmount,
            address,
         });

         await order.save();

         user.cart=[];
         await user.save();

         return res.status(200).send("Order Placed Successfully");


    } catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

const getAllOrders = async(req,res)=>{
    try{

        const user = req.user;

        const orders = await OrderSchema.find({user:user.id});

        return res.status(200).send(orders);

    }catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

// Favourites
const AddToFavorites = async(req,res)=>{
    try{

        const {productId}=req.body;
        const userJWT = req.user;

        const user = await UserSchema.findById(userJWT.id);

        if(!user.favourites.includes(productId)){
            user.favourites.push(productId);
            await user.save();
        }

        return res.status(200).send("Product added to favorites successfully",user);

    }catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

const RemoveFromFavorites = async(req,res)=>{
    try{

        const {productId}=req.body;
        const userJWT = req.user;

        const user = await UserSchema.findById(userJWT.id);
        
        user.favourites = user.favourites.filter((fav)=> !fav.equals(productId));

        await user.save();

        return res.status(200).send("Product remove from favorites successfully",user);

    }catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

const getUserFavourites = async(req,res)=>{
    try{
     
        const userId = req.user.id;
        const user = await UserSchema.findById(userId).populate("favourites").exec();

        if(!user){
            return res.status(400).send("User not found");
        }

        return res.status(200).send(user.favourites);
        
    }catch (error) {
        console.log(error);
        return res.status(400).send("Something went wrong. Please try again later");
    }
}

module.exports = { UserRegister, UserLogin, AddToCart, RemoveFromCart, getAllCartItems,PlaceOrder,getAllOrders ,AddToFavorites,RemoveFromFavorites,getUserFavourites};