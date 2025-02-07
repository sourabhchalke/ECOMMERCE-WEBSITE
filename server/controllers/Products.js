const mongoose=require('mongoose');
const ProductSchema=require('../models/Products');

const addProduct = async(req,res)=>{

    try{

        const productsData = req.body;
        console.log(productsData);
        

        if(!Array.isArray(productsData)) {
            console.log("Invalid/Misinformation Please Enter Correct Details");
        } 
        
        const createdProducts=[];

        const {title,name,desc,img,price,size,category}=productsData;
        console.log(title,name,desc);

        const product=new ProductSchema({
            title,
            name,
            desc,
            img,
            price,
            size,
            category
        });

        const newProduct = await product.save();

        return res.status(200).send("Product added successfully");

    }catch(error){
        console.log(error);
        return res.status(400).send("Something went wrong",error);
    }

}

module.exports={addProduct};