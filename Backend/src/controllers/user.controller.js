import { ApiError } from '../utils/ApiError.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import { User } from '../models/user.modal.js'
import { ApiResponse } from '../utils/ApiResponse.js';

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const refreshToken = user.generateAccessToken();
        const accessToken = user.generateAccessToken();

        //set refreshToken in to the database
        user.refreshToken = refreshToken;   
        user.accessToken = accessToken;
        await user.save({ validateBeforeSave: false })

        return {refreshToken, accessToken}
    } catch (error) {
        throw new ApiError(500, "Something went worng while generating Access and Refresh Token.")
    }
}


const registerUser = asyncHandler( async (req, res, next) => {
    // user detail from frontend
    // validation is required and check empty.
    // check user already login?
    // check user already exist?
    // create user if not exist?
    // check for user creation or not?
    // return response to the frontend
   const { fullname, email, password } = req.body

    if (!fullname || !email || !password) {
        throw new ApiError(400, "Required field")
    }

    if (
        [fullname, email, password].some((field) => field?.trim() ==="")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    // Check user already exist
    const userAlreadyExist = await User.findOne({email})

    if (userAlreadyExist) {
        throw new ApiError(409, "User already exist.")
    }

    // user Creation
    const userCreate = await User.create({
        fullname,
        email: email.toLowerCase(),
        password
    })

    const createdUser = await User.findById(userCreate._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went worng while registering user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully.")
    )
})

const userLogin = asyncHandler( async (req, res) => {
    // send cookies
    // res sucessfully login

    // user login detail
    const {email, password} = req.body
    if(!email || !password){
        throw new ApiError(404, "Please enter email-id and password.")
    }

    // email and password check is blank or not
    if (
        [email, password].some((userCredential) => userCredential?.trim() === "")
    ) {
        throw new ApiError(401, "Required fields.")
    }

    // email id correction or find email id in our database is exist
    const user = await User.findOne({email})
    if (!user) {
        throw new ApiError(400, "Email not exist.")
    }

    // password check user
    const isPasswordCorrect = user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        throw new ApiError(404, "Password incorrect")
    }

   // generate access token and refresh token
   const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

   const loggedInUser = await User.findById(user._id).select( "-passoword -refreshToken")

   const options = {
    httpOnly: true,
    secure: true
   }

   return res.status(201).
   cookie("accessToken", accessToken, options).
   cookie("refreshToken", refreshToken, options).
   json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User loggedin successfully."
        )
   )
})

const logOutUser = asyncHandler( async (req, res) => {
    
})

export {
    registerUser,
    userLogin
}