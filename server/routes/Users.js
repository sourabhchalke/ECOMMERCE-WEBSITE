const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Users');

console.log("Imported controllers:", controllers); //  Debugging line

const { 
  UserRegister, 
  UserLogin, 
  AddToCart, 
  RemoveFromCart, 
  getAllCartItems, 
  PlaceOrder, 
  getAllOrders, 
  AddToFavorites, 
  RemoveFromFavorites, 
  getUserFavourites 
} = controllers;

const { verifyToken } = require('../middleware/verifyToken');

router.post('/signup', UserRegister);
router.post('/signin', UserLogin);

// Cart
router.get('/cart', verifyToken, getAllCartItems);
router.post('/cart', verifyToken, AddToCart);
router.patch('/cart', verifyToken, RemoveFromCart);

// Order
router.get('/order', verifyToken, getAllOrders);
router.post('/order', verifyToken, PlaceOrder);

// Favorites
router.get('/favorite', verifyToken, getUserFavourites);
router.post('/favorite', verifyToken, AddToFavorites);
router.patch('/favorite', verifyToken, RemoveFromFavorites);

module.exports = router;
