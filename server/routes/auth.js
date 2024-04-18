import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../mongodb/models/user.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    console.log('Login request received for username:', username);
  
    try {
      // Find user by username
      const user = await User.findOne({ username }).lean();
  
      console.log('User found in database:', user);
      console.log('Plaintext Password:', password);
        console.log('Hashed Password (from database):', user.password);

  
      if (!user) {
        console.log('User not found in database');
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Compare plaintext password with hashed password
      const match = await bcrypt.compare(password, user.password);
      console.log('Password Match:', match); // Log the result of the comparison
  
      if (!match) {
        console.log('Password does not match');
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Generate JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
export default router;
