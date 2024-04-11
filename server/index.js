//server/index.js
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './mongodb/connect.js';
import multer from 'multer';
import galleryRoutes from './routes/galleryRoutes.js';

dotenv.config();

const app = express();

// Enable CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin based on your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

app.use(express.json({ limit: '50mb' }));

// Multer configuration for file upload
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB file size limit
  },
});

// Use gallery routes
app.use('/api/gallery', galleryRoutes);

// Define a route handler for the root path ("/")
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

const PORT = process.env.PORT || 8080;

const server = async () => {
    try {
        // Connect to MongoDB
        await connectdb(process.env.MONGODB_URL);

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1); // Exit with failure
    }
};

server();
