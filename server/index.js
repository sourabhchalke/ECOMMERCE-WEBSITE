import express, { json, urlencoded } from 'express';
const app=express();
import { connect } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

import cors from 'cors';
import UserRouter from './routes/Users.js';
import Product from './routes/Products.js';

// Connecting to MongoDB
connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch(err => console.error("Something went wrong:", err));

// Middleware
app.use(cors());
app.use(json({limit:"50mb"}));
app.use(urlencoded({extended:true}));

// User
app.use('/api/user',UserRouter);

// Product 
app.use('/api/products',Product);

app.get('/api',(req,res)=>{
    res.send("Server Running");
})

app.listen(8080,()=>{
    console.log("Server Successfully Running on Port:8080");
})