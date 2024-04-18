import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
}, { collection: 'users' }); // Specify the collection name here

const User = mongoose.model('User', userSchema);

export default User;
