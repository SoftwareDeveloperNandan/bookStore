import mongoose, { Schema } from "mongoose";


const bookInfoSchema = new mongoose.Schema(
    {
        bookName: String,
        bookPrice: Number,
        bookCategory: String,
        bookImage: String,
        bookTitle: String
    },
    {
        timestamps: true
    }
)

export const BookInfo = mongoose.model("BookInfo", bookInfoSchema);



