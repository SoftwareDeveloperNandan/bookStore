const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export { asyncHandler }
//jab hum export default karte hai to import ke time hamein import asyncHandler from "../asyncHandlerf.js"
