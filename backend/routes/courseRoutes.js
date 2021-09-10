const express = require("express");

const {
  createCourse,
  getAllCourses,
  getAllFrontendCourses,
  getAllBackendCourses,
  getAllDatabaseCourses,
  getAllFullstackCourses,
  getAllDesigningCourses,
} = require("../controllers/courseControllers");

const { instructorProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new course - Oly for instructors
router.route("/createCourse").post(instructorProtect, createCourse);

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

module.exports = router;
