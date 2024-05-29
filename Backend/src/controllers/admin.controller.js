import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.modal.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//generate accesstoken and refreshtoken
const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const admin = await Admin.findById(userId);
    if (!admin) {
      throw new ApiError(401, "User not found");
    }
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;

    await admin.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

// Admin register
const adminRegister = asyncHandler(async (req, res) => {
  // data get karo
  // check karo blank hai?
  // email check karo blank to nahi hai.
  // sab kuch sahi hai to insert kar do database me.
  // response bhej do ok

  const { username, mobile, email, password, role } = req.body;
  if (!username && !mobile && !email && password) {
    throw new ApiError(400, "This field can't be blank.");
  }

  if ([username, email, mobile, password].some((data) => data?.trim() === "")) {
    throw new ApiError(400, "All field required.");
  }

  const admin = await Admin.create({
    username,
    email,
    mobile,
    password,
    role,
  });

  const createAdmin = await Admin.findById(admin._id).select("-password");

  if (!createAdmin) {
    throw new ApiError(400, "Something went wrong when registering admin.");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createAdmin, "Admin register successfully."));
});

//Admin login
const adminLogin = asyncHandler(async (req, res) => {
  const { email, mobile, password } = req.body;
  console.log("Our admin details: ", email, mobile, password);

  if (
    [email, mobile, password].some(
      (adminCredential) => adminCredential?.trim() === ""
    )
  ) {
    throw new ApiError(400, "This field can't be blank.");
  }

  if (!email && !password && !mobile) {
    throw new ApiError(401, "Please enter required field.");
  }

  const admin = await Admin.findOne({
    $or: [{ email }, { mobile }],
  });

  console.log("admin data::", admin._id);

  if (!admin) {
    throw new ApiError(400, "User doesn't exist.");
  }

  const isPasswordCorrect = await admin.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid user credential.");
  }

  // generate access token and refresh token
  const { refreshToken, accessToken } = await generateAccessAndRefereshTokens(
    admin._id
  );
  const loggedInAdmin = await Admin.findById(admin._id).select("-password");

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInAdmin },
        "Admin loggedIn Successfully."
      )
    );
});

// Admin logout
const adminLogout = asyncHandler(async (req, res) => {
  await Admin.findByIdAndUpdate(
    req.admin._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "Admin logout successfully"));
});

export { adminLogin, adminRegister, adminLogout };
