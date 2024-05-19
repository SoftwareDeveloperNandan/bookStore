import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import {SIZE_OF_LIMIT} from './constraints.js'

const app = express();

// Ye hum url set kar rahe hai ki data kahan se aa sakta hai waise abhi yahan pe all kar diya hai.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.urlencoded({extended: true, limit: SIZE_OF_LIMIT}))
app.use(express.json({limit: SIZE_OF_LIMIT}))
app.use(cookieParser())


// router imports
import userRoutes from './routes/user.route.js'
import bookDetail from './routes/book.route.js'


// routes declaration
app.use("/bookstore/book", bookDetail)
app.use("/bookstore/user", userRoutes)



export { app }