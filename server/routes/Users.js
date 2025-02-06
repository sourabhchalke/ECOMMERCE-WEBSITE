const express = require('express');
const router = express();
const UserRegister = require('../controllers/Users');

router.post('/signup',UserRegister);

module.exports=router;