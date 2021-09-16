const express = require("express");

const {
    adminLogin,
    getAllStudents
} = require("../controllers/adminControllers");
const { adminProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();


// Admin Login
router.route("/adminLogin").post(adminLogin);

// Get all students
router.route("/getAllStudents").get(adminProtect,getAllStudents)

module.exports = router;
