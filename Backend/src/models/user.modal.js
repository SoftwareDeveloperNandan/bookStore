import mongoose, { Schema } from "mongoose"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const userSchema = new Schema(
   {
     fullname: {
        type: String,
        required: true,
        trim: true,
        index: true // when enable searching field then index will be true
        
     },
     email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
     },
     password: {
        type: String,
        required: [true, "Password is required"]
     },
     refreshToken: {
        type: String
     }
   },
    {
        timestamps: true
    }
)

// I want to encrypt with when password is not encrypted.
userSchema.pre("save", async function(next) {

    if (!this.isModified("password")) return next()
        
        this.password = await bcrypt.hash(this.password, 10)
        next()

})

// This method is used to check and compare with new password and old password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

// Generate AccessToken with jwt
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            fullname: this.fullname,
            email: this.email,
            password: this.password
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", userSchema)