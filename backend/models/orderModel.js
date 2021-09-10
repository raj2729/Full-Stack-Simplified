const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
    date: {
      type: Date,
      required: true,
    },
    payment_id: {
        type: String,
        required: true,
    },
    payment_result: {
        type: Boolean,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
