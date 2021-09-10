const express = require("express");

const {
  createCourse,
  getAllCourses,
} = require("../controllers/courseControllers");

const { instructorProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new course - Oly for instructors
router.route("/createCourse").post(instructorProtect, createCourse);

// Get all courses
router.route("/allCourses").get(getAllCourses);

module.exports = router;
