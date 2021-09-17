const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Course = require("../models/courseModel");
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

// 3. Get all instructors
const getAllInstructors = asyncHandler(async (req,res) => {
  let instructors = await User.find({isInstructor:true}).select('_id name email')
  const instructor = []
  for(let teacher of instructors) {
    let count = await Course.countDocuments({instructorId:teacher._id})
    instructor.push({teacher, count})
  }
  res.status(200).json({
    success: true,
    data: instructor
  })
})


module.exports = {
    adminLogin,
    getAllStudents,
    getAllInstructors
};

