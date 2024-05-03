//server/index.js
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './mongodb/connect.js';
import multer from 'multer';
import Routes from './routes/Routes.js';
import nodemailer from 'nodemailer'
import authMiddleware from './middleware/authMiddleware.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Enable CORS middleware
app.use(cors({
    origin: ['https://garcity.com/','http:localhost:3000','https://www.garcity.com/'], // Adjust the origin based on your frontend URL
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


app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected route', userId: req.userId });
});

app.use('/api', Routes);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASS,
    },
  });
  
  app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
  
    try {
      const mailOptions = {
        from: 'garcitwebsite@gmail.com',
        to: 'mkartsoffical@gmail.com', // Change this to your own email address
        subject: 'New Message from Contact Form',
        html: `
          <h1>New Message from Contact Form</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };
  
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
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
