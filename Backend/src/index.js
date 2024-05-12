import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/db.js"

dotenv.config({
    path: './env'
})
const app = express()

// Start writing route.
app.get("/", (req, res) => {
    res.send("BookStore")
})

// Database connection handle
connectDB()
.then(() => {
    app.listen(process.env.PORT || 5173, () => {
        console.log(`App is listing at port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!!!", error);
})
