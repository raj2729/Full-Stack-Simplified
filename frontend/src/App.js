import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import CoursePage from "./components/CoursePage";
import Assignments from "./components/Assignments";
import MyCoursesUser from "./components/MyCoursesUser";
import ContactForm from "./components/ContactUs";
import MyCoursesInstr from "./components/MyCoursesInstr";
import CreateCourse from "./components/CreateCourse";
import CreateChapter from "./components/CreateChapter";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact></Route>
      <Route path="/signin" component={SignIn} exact></Route>
      <Route path="/signup" component={SignUp} exact></Route>
      <Route path="/course/:id" component={CoursePage} exact></Route>
      <Route path="/assignments/:id" component={Assignments} exact></Route>
      <Route path="/mycourses/:id" component={MyCoursesUser} exact></Route>
      <Route path="/contactForm" component={ContactForm} exact></Route>
      <Route
        path="/instructorcourses/:id"
        component={MyCoursesInstr}
        exact
      ></Route>
      <Route path="/createCourse" component={CreateCourse} exact></Route>
      <Route path="/createChapter/:id" component={CreateChapter} exact></Route>
    </BrowserRouter>
  );
}

export default App;
