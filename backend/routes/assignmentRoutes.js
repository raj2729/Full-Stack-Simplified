const express = require("express");

const { createAssignment } = require("../controllers/assignmentControllers");

const {
  instructorProtect,
  protect,
} = require("../middlewares/protectedRoutes");

const router = express.Router();

// Submit new Assignment
router.route("/submitAssignment").post(createAssignment);

module.exports = router;
