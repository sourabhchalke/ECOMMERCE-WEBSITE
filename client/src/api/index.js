const axios = require('axios');

const API = axios.create({
    baseURL:"http://localhost:8080/api",
});

const UserSignUp = async(data)=> await API.post('/user/signup',data);
const UserSignIn = async(data)=> await API.post('/user/signin',data);

// Product
const getAllProducts = async(filter)=> await API.get(`/products?${filter}`);

const getProductDetails = async(id)=> await API.get(`/products?${id}`);

// Cart
const getCart = async(token)=> await API.get('/user/cart',{
    headers:{Authorization:`Bearer ${token}`},
});

const addToCart = async(token,data)=> await API.post('/user/cart',data,{
    headers:{Authorization:`Bearer ${token}`},
});

const deleteFromCart = async(token,data)=> await API.patch('/user/cart',data,{
    headers:{Authorization:`Bearer ${token}`},
});

// Favorite
const getFavorite = async(token)=> await API.get('/user/favorite',{
    headers:{Authorization:`Bearer ${token}`},
});

const addToFavorite = async(token,data)=> await API.post('/user/favorite',data,{
    headers:{Authorization:`Bearer ${token}`},
});

const deleteFromFavorite = async(token,data)=> await API.patch('/user/favorite',data,{
    headers:{Authorization:`Bearer ${token}`},
});

module.exports = {
    UserSignUp,
    UserSignIn,
    getAllProducts,
    getProductDetails,
    getCart,
    addToCart,
    deleteFromCart,
    getFavorite,
    addToFavorite,
    deleteFromFavorite,
};
