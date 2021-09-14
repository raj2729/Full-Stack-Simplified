const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");
const Assignment = require("../models/assignmentModel");
const User = require("../models/userModel");

/*
LIST OF CONTROLLERS
1. Create an assignment
*/

// 1. Create a new assignment
const createAssignment = asyncHandler(async (req, res) => {
  const { isCertified, assignmentLink, assignmentScreenshotLink, courseId } =
    req.body;
  const userId = req.user._id;

  const submitted = await Assignment.find({ userId: req.user._id, courseId });

  if (submitted.length > 0) {
    return res.status(400).json({
      success: false,
      error: "User has already submitted the assignment",
    });
  }

  const course = await Course.find({ courseId });

  if (!course) {
    return res.status(400).json({
      success: false,
      message: "No such course found",
    });
  }

  const newAssignment = new Assignment({
    userId,
    courseId,
    isCertified,
    assignmentLink,
    assignmentScreenshotLink,
  });

  await newAssignment.save();
  // console.log(req.user);

  return res.status(200).json({
    success: true,
    data: newAssignment,
  });
});

module.exports = {
  createAssignment,
};
