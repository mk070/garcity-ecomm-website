// mongodb/connect.js

import mongoose from "mongoose";

const connectdb = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,        // To use new URL parser
            useUnifiedTopology: true      // To use new Server Discover and Monitoring engine
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit with failure
    }
};

export default connectdb;
