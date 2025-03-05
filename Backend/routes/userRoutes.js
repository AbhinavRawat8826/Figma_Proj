import express from 'express';
import User from '../models/userModels.js';
import { OAuth2Client } from 'google-auth-library';
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import bcrypt from 'bcrypt';

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


router.post('/signup', async (req, res) => {
   try {
    const { email, password } = req.body; 
    const user = await User.findOne({ email }); 

    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        email,
        password: hashedPassword
    });

    await newUser.save();

    if (newUser) {
        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            email: newUser.email, 
        });
    } else {
        res.status(400).json({ error: "Invalid user data" });
    }
   } catch (error) {
       res.status(500).json({ error: error.message });
       console.log("Error in signupUser: ", error.message);
   }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ error: "Invalid email" });  
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password" }); 
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            email: user.email, 
        });
    } catch (error) {
        res.status(500).json({ error: error.message }); 
        console.log("Error in loginUser: ", error.message);
    }
});

// Google OAuth Callback Route
router.post('/auth/google', async (req, res) => {
    try{
        const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email } = ticket.getPayload();
  
    let user = await User.findOne({ email });
    if (!user) user = await User.create({ email, password: null });
  
    generateTokenAndSetCookie(user._id, res);
    res.json({ _id: user._id, email: user.email });
    }

    catch (error) {
        console.error('Google Auth Error:', error);
        res.status(500).json({ message: 'Google Authentication failed' });
    }
  });
  
  




export default router;
