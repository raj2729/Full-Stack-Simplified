const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");

/*
LIST OF CONTROLLERS
1. Create a new course - only instructors can
2. Get all courses - for every user
3. Get all frontend courses - for every user
4. Get all backend courses - for every user
5. Get all database courses - for every user
6. Get all fullstack courses - for every user
7. Get all designing courses - for every user
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

// Get details of all Frontend courses
const getAllFrontendCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ type: "frontend" });
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Frontend Course found",
    });
  }
});

// Get details of all Backend courses
const getAllBackendCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ type: "backend" });
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Backend Course found",
    });
  }
});

// Get details of all Database courses
const getAllDatabaseCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ type: "database" });
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Database Course found",
    });
  }
});

// Get details of all Fullstack courses
const getAllFullstackCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ type: "fullstack" });
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Fullstack Course found",
    });
  }
});

// Get details of all Designing courses
const getAllDesigningCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ type: "designing" });
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Designing Course found",
    });
  }
});

// Get details of course by ID
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.status(200).json({
      success: true,
      data: course,
    });
  } else {
    res.status(404).json({
      success: false,
      error: "No course found",
    });
  }
});

module.exports = {
  createCourse,
  getAllCourses,
  getAllFrontendCourses,
  getAllBackendCourses,
  getAllDatabaseCourses,
  getAllFullstackCourses,
  getAllDesigningCourses,
  getCourseById,
};
