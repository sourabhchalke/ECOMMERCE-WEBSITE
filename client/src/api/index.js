const axios = require('axios');

const API = axios.create({
    baseURL:"http://localhost:8080/api",
});

const UserSignUp = async(data)=> await API.post('/user/signup',data);
const UserSignIn = async(data)=> await API.post('/user/signin',data);

// Product
const getAllProducts = async(filter)=> await API.get(`/products?${filter}`);

const getAProductDetails = async(id)=> await API.get(`/products?${id}`);




module.exports = {
    UserSignUp,
    UserSignIn,
    getAllProducts,
    getAProductDetails,
    
};
