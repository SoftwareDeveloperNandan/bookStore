import { BookInfo }  from "../models/bookinfo.modal.js";

const getBook = async (req, res) => {
    try {
        const book = await BookInfo.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("Can't get book...", error);
        throw error;
    }
}

export default getBook;