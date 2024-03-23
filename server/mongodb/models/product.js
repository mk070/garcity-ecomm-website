import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true  }
});

const ProductModel = mongoose.model( 'Product', ProductSchema );

export default  ProductModel;