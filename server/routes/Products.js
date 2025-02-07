const express = require('express');
const router = express();
const {addProduct}=require('../controllers/Products');

router.post('/addProduct',addProduct);
// router.post('/signin',UserLogin);

module.exports=router;