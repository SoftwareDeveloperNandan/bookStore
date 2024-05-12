import mongoose from "mongoose";
import { DB_NAME } from "../constraints.js";


const connectDB =  async () => {
    try {
       const databaseConnection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`MongoDB Connected sucessfully!! DB_HOST: ${databaseConnection.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection Faild.", error);
        process.exit(1)
    }
}

export default connectDB;