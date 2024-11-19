import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDb from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

// App Config
const PORT = process.env.PORT || 4000;
const app=express();
await connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.get('/',(req, res)=>{
    return res.send('testing');
})
app.use('/api/user',userRouter);
// Server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})