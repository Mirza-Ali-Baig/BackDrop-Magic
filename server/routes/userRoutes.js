import express from "express";
import {clerkWebhook, getUserCredit} from "../controllers/UserController.js";
import userAuth from "../middlewares/auth.js";

const userRouter=express.Router();


userRouter.post('/webhooks', clerkWebhook);
userRouter.get('/credits', userAuth,getUserCredit);

export default userRouter;