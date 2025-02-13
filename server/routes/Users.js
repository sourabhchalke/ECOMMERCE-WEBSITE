import express from "express";
import {
  UserRegister,
  UserLogin,
  AddToCart,
  RemoveFromCart,
  getAllCartItems,
  PlaceOrder,
  getAllOrders,
  AddToFavorites,
  RemoveFromFavorites,
  getUserFavorites,
} from "../controllers/Users.js";
import  verifyToken  from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

//cart
router.get("/cart", verifyToken, getAllCartItems);
router.post("/cart", verifyToken, AddToCart);
router.patch("/cart", verifyToken, RemoveFromCart);

//order
router.get("/order", verifyToken, getAllOrders);
router.post("/order", verifyToken, PlaceOrder);

//favourites
router.get("/favorite", verifyToken, getUserFavorites);
router.post("/favorite", verifyToken, AddToFavorites);
router.patch("/favorite", verifyToken, RemoveFromFavorites);

export default router;
