const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch(err => console.error("Something went wrong:", err));


app.get('/',(req,res)=>{
    res.send("Server Running");
})

app.listen(8080,()=>{
    console.log("Server Successfully Running on Port:8080");
})