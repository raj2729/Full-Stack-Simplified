const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");

/*
LIST OF CONTROLLERS
1. Create a new course - only instructors can
2. Get all courses - for every user
*/

// Create a new course
const createCourse = asyncHandler(async (req, res) => {
  const {
    name,
    tagline,
    type,
    description,
    assignmentQuestion,
    price,
    advantages,
    chapters,
    image,
  } = req.body;
  const instructorId = req.user._id;

  const course = await Course.create({
    instructorId,
    name,
    tagline,
    type,
    description,
    assignmentQuestion,
    price,
    advantages,
    chapters,
    image,
  });

  if (course) {
    res.status(201).json({
      _id: course._id,
      instructorId: course.instructorId,
      name: course.name,
      tagline: course.tagline,
      type: course.type,
      description: course.description,
      assignmentQuestion: course.assignmentQuestion,
      price: course.price,
      advantages: course.advantages,
      chapters: course.chapters,
      image: course.image,
      message: "Course Created Successfully",
    });
  } else {
    res.status(404);
    throw new Error("Course not created");
  }
});

// Get details of all courses
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Course found",
    });
  }
});

module.exports = {
  createCourse,
  getAllCourses,
};
