const express = require('express');
const router = express();
const {UserRegister,UserLogin,AddToCart,RemoveFromCart,getAllCartItems,getAllOrders ,PlaceOrder,AddToFavorites,RemoveFromFavorites,getUserFavourites} = require('../controllers/Users');

router.post('/signup',UserRegister);
router.post('/signin',UserLogin);

// Cart
router.get('/cart',getAllCartItems);
router.post('/cart',AddToCart);
router.patch('/cart',RemoveFromCart);

// Order
router.get('/order',getAllOrders);
router.post('/order',PlaceOrder);

// Favourites
router.get('/favorite',getUserFavourites);
router.post('/favorite',AddToFavorites);
router.patch('/favorite',RemoveFromFavorites);





module.exports=router;