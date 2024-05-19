import mongoose, { Schema } from 'mongoose';

const bookSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        title: {
            type: String,
            required: true,
            index: true
        },
        price: {
            type: Number,
            required: true,
            index: true
        },
        category: {
            type: String,
            required: true,
            index: true
        },
        image: {
            type: String,
            required: true
        }
    }
)


export const Book = mongoose.model("Book", bookSchema)