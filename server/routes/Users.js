const express = require('express');
const router = express();
const {UserRegister,UserLogin} = require('../controllers/Users');

router.post('/signup',UserRegister);
router.post('/signin',UserLogin);

module.exports=router;