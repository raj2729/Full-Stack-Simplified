const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
    date: {
      type: Date,
      required: true,
    },
    paymentId: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
