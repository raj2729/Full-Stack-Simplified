const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/config");

// Routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

// Connecting to mongodb server
connectDB();

// express application
const app = express();

// allow CORS
app.use(cors());

// Body Parser middleware, no need to install body-parser package
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Full Stack Simplified</h1>");
});

app.use("/user", userRoutes);
app.use("/course", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
