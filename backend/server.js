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

// Update a user by ID
app.put('/put/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete a user by ID
app.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on 3000');
});