const express = require('express');
const router = express();
const {addProduct,getProduct,getProductById}=require('../controllers/Products');

router.post('/addProduct',addProduct);
router.get('/getProduct',getProduct);
router.get('/:id',getProductById);

module.exports=router;