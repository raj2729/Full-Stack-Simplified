const express = require("express");

const {
  createCourse,
  getAllCourses,
  getAllFrontendCourses,
  getAllBackendCourses,
  getAllDatabaseCourses,
  getAllFullstackCourses,
  getAllDesigningCourses,
  getCourseById,
  payUsingRazorpay,
  getAllOtherCourses,
  getAllCoursesOfUser,
  getAllCoursesOfInstructor,
  createChapter,
} = require("../controllers/courseControllers");

const {
  protect,
  instructorProtect,
} = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new course - Only for instructors
router.route("/createCourse").post(createCourse);

// Create new chapter - Only for instructors
router.route("/createChapter/:id").put(createChapter);

// Get all courses
router.route("/allCourses").get(getAllCourses);

// Get all Frontend courses
router.route("/allFrontendCourses").get(getAllFrontendCourses);

// Get all Backend courses
router.route("/allBackendCourses").get(getAllBackendCourses);

// Get all Database courses
router.route("/allDatabaseCourses").get(getAllDatabaseCourses);

// Get all Fullstack courses
router.route("/allFullstackCourses").get(getAllFullstackCourses);

// Get all Designing courses
router.route("/allDesigningCourses").get(getAllDesigningCourses);

// Get all Other courses
router.route("/allOtherCourses").get(getAllOtherCourses);

// Get a particular course by id
router.route("/oneCourse/:id").get(getCourseById);

// Get all courses by id
router.route("/allCourses/:id").get(getAllCoursesOfUser);

// Get all courses of instructor
router.route("/allInstructorCourses/:id").get(getAllCoursesOfInstructor);

// Pay using Razorpay
router.route("/razorpay").post(payUsingRazorpay);

module.exports = router;
