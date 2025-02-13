import User from '../models/Users.js';
import Order from '../models/Orders.js';
import { hash, compare } from 'bcrypt';
import pkg from 'jsonwebtoken';

const { sign } = pkg;
import dotenv from 'dotenv';
dotenv.config(); 

export const UserRegister = async (req, res) => {
    try {
        const { name, email, password, img } = req.body;

        const existingUser = await User.findOne({ email }); 
        if (existingUser) {
            return res.status(400).json({ error: "User Already Exists" });
        }

        const hashPassword = await hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword, img });

        const createUser = await newUser.save();

        if (!process.env.SECRET_KEY) {
            return res.status(500).json({ error: "Server error, try again later" });
        }

        const token = sign({ id: createUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({ message: "User registered successfully", token });

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const ExistsUser = await User.findOne({ email });

        if (!ExistsUser) {
            return res.status(400).json({ error: "User Not Found" });
        }

        const isPasswordMatch = await compare(password, ExistsUser.password);
        if (!isPasswordMatch) {
            return res.status(404).json({ error: "Incorrect Password" });
        }

        if (!process.env.SECRET_KEY) {
            return res.status(500).json({ error: "Server error, try again later" });
        }

        const token = sign({ id: ExistsUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({ message: "User Login Successfully", token ,user:ExistsUser});

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Cart
export const AddToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const user = await User.findById(req.user.id);

        const existingCartItemIndex = user.cart.findIndex(item => item.product.equals(productId));
        if (existingCartItemIndex !== -1) {
            user.cart[existingCartItemIndex].quantity += quantity;
        } else {
            user.cart.push({ product: productId, quantity });
        }

        await user.save();
        return res.status(200).json({ message: "Product added to cart" });

    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

export const RemoveFromCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(400).send("User Not Found");
        }

        const productIndex = user.cart.findIndex(item => item.product.equals(productId));

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
            return res.status(200).json({ message: "Product removed from cart" });
        }

    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

export const getAllCartItems = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("cart.product");
        return res.status(200).json(user.cart);
    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

// Orders
export const PlaceOrder = async (req, res) => {
    try {
        const { products, address, totalAmount } = req.body;
        const user = await User.findById(req.user.id);

        const order = new Order({
            products,
            user: user._id,
            total_amount: totalAmount,
            address,
        });

        await order.save();
        user.cart = [];
        await user.save();

        return res.status(200).json({ message: "Order placed successfully" });

    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

// Favorites
export const AddToFavorites = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await User.findById(req.user.id);

        if (!user.favourites.includes(productId)) {
            user.favourites.push(productId);
            await user.save();
        }

        return res.status(200).json({ message: "Product added to favorites successfully" });

    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

export const RemoveFromFavorites = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await User.findById(req.user.id);

        user.favourites = user.favourites.filter(fav => !fav.equals(productId));
        await user.save();

        return res.status(200).json({ message: "Product removed from favorites successfully" });

    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

export const getUserFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("favourites");
        return res.status(200).json(user.favourites);
    } catch (error) {
        return res.status(400).send("Something went wrong. Please try again later");
    }
};

// export default  {
//     UserRegister,
//     UserLogin,
//     AddToCart,
//     RemoveFromCart,
//     getAllCartItems,
//     PlaceOrder,
//     getAllOrders,
//     AddToFavorites,
//     RemoveFromFavorites,
//     getUserFavorites,

// };
