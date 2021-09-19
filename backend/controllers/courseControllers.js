const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const { response } = require("express");

const razorpay = new Razorpay({
  key_id: "rzp_test_tOsI14GHZSP3U8",
  key_secret: "oytgKKbuxFUlZdx4qr4tzG4j",
});

/*
LIST OF CONTROLLERS
1. Create a new course - only instructors can
2. Get all courses - for every user
3. Get all frontend courses - for every user
4. Get all backend courses - for every user
5. Get all database courses - for every user
6. Get all fullstack courses - for every user
7. Get all designing courses - for every user
8. Get Details of course by ID
9. Pay using Razorpay
10. Get details of all Other courses
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

// Get details of all Other courses
const getAllOtherCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ type: "other" });
  if (courses.length > 0) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({
      message: "No Other Course found",
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

// Get all courses by ID
const getAllCoursesOfUser = asyncHandler(async (req, res) => {
  const courses = await Course.find({ userId: req.params.id });
  if (courses) {
    res.status(200).json({
      success: true,
      data: courses,
    });
  } else {
    res.status(404).json({
      success: false,
      error: "No course found",
    });
  }
});

// Get all courses by instructor
const getAllCoursesOfInstructor = asyncHandler(async (req, res) => {
  const courses = await Course.find({ instructorId: req.params.id });
  if (courses) {
    res.status(200).json({
      success: true,
      data: courses,
    });
  } else {
    res.status(404).json({
      success: false,
      error: "No course found",
    });
  }
});

// Payment gateway using Razorpay
const payUsingRazorpay = async (req, res) => {
  const payment_capture = 1;
  const amount = 1499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getAllFrontendCourses,
  getAllBackendCourses,
  getAllDatabaseCourses,
  getAllFullstackCourses,
  getAllDesigningCourses,
  getAllOtherCourses,
  getCourseById,
  getAllCoursesOfUser,
  getAllCoursesOfInstructor,
  payUsingRazorpay,
};
