import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    total_amount:{
        type:mongoose.Types.Decimal128,
        required:true,
    },
    address:{
        type:String,
        default:"",
        required:true,
    },
    status:{
        type:String,
        default:"Payment Done",
    },

},{timestamps:true})

export default mongoose.model("Shopping-Order",OrderSchema,"Shopping-Order");