const express = require("express");

const { registerUser, userLogin } = require("../controllers/userController");

const router = express.Router();

// Register new user
router.route("/userRegister").post(registerUser);

// Post user auth
router.route("/userLogin").post(userLogin);

module.exports = router;
