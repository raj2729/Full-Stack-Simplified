const express = require("express");

const {
    createOrder,
    getAllOrders,
    getAllCoursesOfUser,
    getAllUsersEnrolledInCourse,
    countOfUsersEnrolledInCourse
} = require("../controllers/orderControllers");

const { instructorProtect } = require("../middlewares/protectedRoutes");
const { adminProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// Create new order
router.route("/createOrder").post(createOrder);

// Get all orders - only admin
router.route("/getAllOrders").get(adminProtect,getAllOrders);

// Get all courses of a particular user
router.route("/getAllCoursesOfUser").post(getAllCoursesOfUser);

// Get all Users Enrolled in a course - for instructor
router.route("/getAllUsersEnrolledInCourse").post(instructorProtect,getAllUsersEnrolledInCourse);

// Get Count of users in a course - for instructor
router.route("/countOfUsersEnrolledInCourse").post(countOfUsersEnrolledInCourse);

module.exports = router;
