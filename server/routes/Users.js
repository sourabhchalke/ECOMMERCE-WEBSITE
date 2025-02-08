const express = require('express');
const router = express();
const {UserRegister,UserLogin,AddToCart,RemoveFromCart,getAllCartItems} = require('../controllers/Users');

router.post('/signup',UserRegister);
router.post('/signin',UserLogin);

// Cart
router.post('/cart',AddToCart);
router.patch('/cart',RemoveFromCart);
router.get('/cart',getAllCartItems);



module.exports=router;