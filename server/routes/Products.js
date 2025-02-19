import express from 'express';
const router = express.Router();  

import { addProduct, getProduct, getProductById } from '../controllers/Products.js';  

router.post('/addProduct', addProduct);
router.get('/products', getProduct);
router.get('/products/:id', getProductById);

export default router;