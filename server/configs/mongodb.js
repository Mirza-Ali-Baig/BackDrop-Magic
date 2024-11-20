import mongoose from "mongoose";

const connectDb = async () => {
    try {
        mongoose.connection.on('connected',()=>{
            console.log('Mongoose connected successfully');
        })
        await mongoose.connect(process.env.MONGODB_URI + '/backdrop-magic');

    } catch (e) {
        console.log("Failed to connect to Mongoose");
    }
}

export default connectDb;
