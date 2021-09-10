const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    assignmentQuestion: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    advantages: [
      {
        advantageName: {
          type: String,
          required: true,
        },
      },
    ],
    chapters: [
      {
        chapterNumber: {
          type: Number,
          required: true,
        },
        chapterName: {
          type: String,
          required: true,
        },
        chapterVideoLink: {
          type: String,
          required: true,
        },
        chapterVideoDescription: {
          type: String,
          required: true,
        },
        chapterStudyMaterial: {
          type: String,
        },
      },
    ],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
