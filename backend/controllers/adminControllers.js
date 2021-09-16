const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../middlewares/generateToken");
/*
LIST OF CONTROLLERS
1. Admin Login
*/

// 1. Ask a question - Logged in users
const adminLogin = asyncHandler(async (req, res) => {

    const { email, password } = req.body;  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      if(user.isAdmin===true) {
        res.status(200).json({
          success: true,
          data: user,
          token: generateToken(user._id),
        });
      } else {
        res.status(404);
        throw new Error("You are not an admin.");      
      }
    } else {
      res.status(404);
      throw new Error("Invalid email or password.");
    }
  });

// 2. Get all Users
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await User.find({isAdmin: false, isInstructor:false})
  res.status(200).json({
    success:true,
    data:students
  })
});


module.exports = {
    adminLogin,
    getAllStudents
};

