const express=require('express');
const app=express();

app.get('/', (req, res) => {
    res.send("Server Running");
});


app.listen(8080,()=>{
    console.log("Server Successfully Running on Port:8080");
})