import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

// Log requests for debugging
API.interceptors.request.use((req) => {
    console.log("Requesting:", req.method.toUpperCase(), req.url);
    return req;
});

// User Authentication
export const UserSignIn = async (data) => {
    try {
        const response = await API.post('/user/signin', data);
        return response;
    } catch (error) {
        console.error("Sign In Error:", error.response?.data || error.message);
        throw error;
    }
};

export const UserSignUp = async (data) => {
    try {
        const response = await API.post('/user/signup', data);
        return response;
    } catch (error) {
        console.error("Sign Up Error:", error.response?.data || error.message);
        throw error;
    }
};

// Product APIs
export const getAllProducts = async (filter) => {
    try {
        return await API.get(`/products?${filter}`);
    } catch (error) {
        console.error("Get Products Error:", error.response?.data || error.message);
        throw error;
    }
};

export const getProductDetails = async (id) => {
    try {
        return await API.get(`/products/${id}`);
    } catch (error) {
        console.error("Get Product Details Error:", error.response?.data || error.message);
        throw error;
    }
};

// Cart APIs
export const getCart = async (token) => {
    try {
        return await API.get('/user/cart/', {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Get Cart Error:", error.response?.data || error.message);
        throw error;
    }
};

export const addToCart = async (token, data) => {
    try {
        return await API.post('/user/cart/', data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Add to Cart Error:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteFromCart = async (token, data) => {
    try {
        return await API.patch('/user/cart/', data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Delete from Cart Error:", error.response?.data || error.message);
        throw error;
    }
};

// Favorites APIs
export const getFavorite = async (token) => {
    try {
        return await API.get('/user/favorite/', {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Get Favorite Error:", error.response?.data || error.message);
        throw error;
    }
};

export const addToFavorite = async (token, data) => {
    try {
        return await API.post('/user/favorite/', data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Add to Favorite Error:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteFromFavorite = async (token, data) => {
    try {
        return await API.patch('/user/favorite/', data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Delete from Favorite Error:", error.response?.data || error.message);
        throw error;
    }
};

// Order APIs
export const placeOrder = async (token, data) => {
    try {
        return await API.post('/user/order/', data, {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Place Order Error:", error.response?.data || error.message);
        throw error;
    }
};

export const getOrder = async (token) => {
    try {
        return await API.get('/user/order/', {
            headers: { Authorization: `Bearer ${token}` },
        });
    } catch (error) {
        console.error("Get Order Error:", error.response?.data || error.message);
        throw error;
    }
};

export default API;
