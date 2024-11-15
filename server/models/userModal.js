import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    creditBalance:{
        type: Number,
         default: 5
    }
})

const UserModel=mongoose.model.user || mongoose.model("user",UserSchema);

export default UserModel