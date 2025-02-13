import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: null,
    },
    cart: {
      type: [
        {
          product: { type: Schema.Types.ObjectId, ref: "Products" },
          quantity: { type: Number, default: 1 },
        },
      ],
      default: [],
    },
    favourites: {
      type: [{ type: Schema.Types.ObjectId, ref: "Products" }], 
      default: [],
    },
    orders: {
      type: [{ type: Schema.Types.ObjectId, ref: "Shopping-Orders" }], 
      default: [],
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema, "User"); 