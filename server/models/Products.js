import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type: {
            org: { type: Number, default: 0.0, min: 0 },
            mrp: { type: Number, default: 0.0, min: 0 },
            off: { type: Number, default: 0, min: 0 } // min: 0 → Prevents negative values for price fields.
        },
        default:{
            org:0.0,
            mrp:0.0,
            off:0,
        }
    },
    size:{
        type:[String],
        default:[],
    },
    category:{
        type:[String],
        default:[],
    },
},{timestamps:true});

export default mongoose.model("Products",ProductSchema,"Products");