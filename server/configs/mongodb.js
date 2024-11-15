import mongoose from "mongoose";

const connectDb=()=>{
    mongoose.connect(process.env.MONGODB_URI)
     .then(()=>{
        console.log("Database connected")
     })
     .catch((err)=>{
        console.log("Database not connected")

     })
}

export default connectDb;
