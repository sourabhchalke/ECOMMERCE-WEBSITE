const express = require('express');
const router = express();
const {UserRegister,UserLogin,AddToCart,RemoveFromCart} = require('../controllers/Users');

router.post('/signup',UserRegister);
router.post('/signin',UserLogin);

// Cart
router.post('/cart',AddToCart);
router.patch('/cart',RemoveFromCart);



module.exports=router;