const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../middlewares/generateToken");

/*
LIST OF CONTROLLERS
1. Register User
2. Login User
*/

// Register New user
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password, isInstructor, isAdmin } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404).json({
      message: "User already exists",
    });
  } else {
    const user = await User.create({
      name,
      email,
      password,
      isInstructor,
      isAdmin,
    });
    // const userId = user._id;
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isInstructor: user.isInstructor,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        message: "User Register Successful",
      });
    } else {
      res.status(404).json({
        message: "User not created",
      });
    }
  }
});

// Login existing users
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isInstructor: user.isInstructor,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      message: "User Login Successful",
    });
  } else {
    res.status(404).json({
      message: "Invalid email or password",
    });
  }
});

module.exports = { registerUser, userLogin };
