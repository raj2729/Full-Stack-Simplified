const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

/*
LIST OF CONTROLLERS
1. Create a order
2. Get all orders
3. Get all courses of a Student
4. Get all students enrolled in a course
*/

// 1. Create a new order
const createOrder = asyncHandler(async (req, res) => {

    const {
        userId,
        courseId,
        date,
        paymentId,
        paymentResult
    } = req.body;
    
    let enrollment = await Order.find({userId, courseId});

    if(enrollment) {
      return res.status(400).json({
        success: false,
        error: "User has already taken the course"
      })
    }

    let newOrder = new Order({
        userId,
        courseId,
        date,
        paymentId,
        paymentResult
      });
  
      await newOrder.save();

      return res.status(200).json({
          success: true,
          data: newOrder
      })
      
  });

// 2. Get all orders
  const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.status(200).json({
      success: true,
      data: orders
    })
  });

// 3. Get all courses of a particular user
  const getAllCoursesOfUser = asyncHandler(async (req, res) => {
    const {userId} = req.body 
    const orders = await Order.find({userId});
    res.status(200).json({
      success: true,
      data: orders
    })
  });

// 4. Get All Users Enrolled in a course
  const getAllUsersEnrolledInCourse = asyncHandler(async (req,res) => {
    const {courseId} = req.body 
    const orders = await Order.find({courseId});
    res.status(200).json({
      success: true,
      data: orders
    })
  })

module.exports = {
  createOrder,
  getAllOrders,
  getAllCoursesOfUser,
  getAllUsersEnrolledInCourse
};
