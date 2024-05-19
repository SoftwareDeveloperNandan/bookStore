import { Book } from '../models/bookinfo.modal.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getBook = asyncHandler( async(req, res, next) => {
    const bookDetail = await Book.find();
    if (!bookDetail) {
        throw new ApiError(404, "Can't find book details")
    }

    return res.status(200).json(
        new ApiResponse(201, bookDetail, "Book details fateched successfully")
    )
})

export { getBook } 