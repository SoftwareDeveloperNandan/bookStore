import express from 'express';
import getBook from '../controllers/bookInfo.controller.js'

const bookRoute = express.Router();
bookRoute.get('/', getBook)

export default bookRoute;