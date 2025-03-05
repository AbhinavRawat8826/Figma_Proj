import express from 'express';
import dotenv from 'dotenv'; 
import connectDB from './db/connectDB.js'; 
import cookieParser from 'cookie-parser'; 
import cors from 'cors'; 
import userRoutes from './routes/userRoutes.js'; 

dotenv.config(); 
connectDB(); 

const app = express();

const frontendUrl = process.env.FRONTEND_URL;

app.use(cors({
  origin: frontendUrl, 
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser()); 

app.use('/api/users', userRoutes);  

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log('Server started at PORT:', PORT));
