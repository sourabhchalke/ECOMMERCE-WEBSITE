import express from 'express';
const router = express.Router();  

import Product from '../controllers/Products.js';

const { addProduct, getProduct, getProductById } = Product;  

router.post('/addProduct', addProduct);
router.get('/getProduct', getProduct);
router.get('/:id', getProductById);

export default router;