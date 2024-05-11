import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const app = express()
const port = process.env.PORT || 5173;

// Start writing route.
app.get("/", (req, res) => {
    res.send("BookStore")
})


app.listen(port, () => {
    console.log("App is listen a port", port);
})