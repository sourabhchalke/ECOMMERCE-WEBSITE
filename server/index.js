const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');

// Middleware
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch(err => console.error("Something went wrong:", err));


app.get('/',(req,res)=>{
    res.send("Server Running");
})

app.listen(8080,()=>{
    console.log("Server Successfully Running on Port:8080");
})