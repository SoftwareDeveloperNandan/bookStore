import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import {app} from './app.js'


dotenv.config({
    path: './.env'
})

// Database connection handle
connectDB()
.then(() => {
    app.listen(process.env.PORT || 7000, () => {
        console.log(`App is listing at port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!!!", error);
})

