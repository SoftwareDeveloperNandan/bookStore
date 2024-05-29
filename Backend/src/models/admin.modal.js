import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
      match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    mobile: {
      type: String,
      unique: true,
      required: true,
      match: [/^\d{10}$/, 'Please fill a valid mobile number'],
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role : {
      type: String,
      default: "admin",
      required: true
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// encypt password
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt);
});

// Decrypt password
adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate AccessToken with jwt
adminSchema.methods.generateAccessToken = function(){
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

adminSchema.methods.generateRefreshToken = function() {
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

export const Admin = mongoose.model("Admin", adminSchema);
