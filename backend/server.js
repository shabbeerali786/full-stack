import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js'; 
import User from './model/user.js'; // Use capital 'U' for model

const app = express();


connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get all users
app.get('/get', async (req, res) => {
    
        const users = await User.find({});
        // Log users to verify data
        res.json(users);
    
});

// Create a new user
app.post('/post', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(401).json(error);
    }
});

app.put('/put:id', async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate
    }

});
app.delete('/delete', (req, res) => {
    res.send('Delete request received!');   
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});