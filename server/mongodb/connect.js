// const mongoose = require( 'mongoose' );
import mongoose from "mongoose";

 const connectdb = (url) => {
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
        .then(() => console.log('mongoDB connected'))
        .catch((err) => console.error(err));
} 

export default connectdb;