import { Schema, Types, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    products: {
      type: [
        {
          product: { type: Schema.Types.ObjectId, ref: "Product" }, 
          quantity: { type: Number, default: 1 },
        },
      ],
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    total_amount: {
      type: Types.Decimal128,
      required: true,
    },
    address: {
      type: String,
      default: "", 
    },
    status: {
      type: String,
      default: "Payment Done",
    },
  },
  { timestamps: true }
);

export default model("Order", OrderSchema);