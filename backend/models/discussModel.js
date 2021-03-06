const mongoose = require("mongoose");

const discussSchema = mongoose.Schema(
  {
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",      
    },
    question: {
        type: String,
        required: true
    },
    answers: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",                
            },
            answer: {
                type: String,
                required: true
            }
        }
    ]
  },
  {
    timestamps: true,
  }
);

const Discuss = mongoose.model("Discuss", discussSchema);

module.exports = Discuss;
