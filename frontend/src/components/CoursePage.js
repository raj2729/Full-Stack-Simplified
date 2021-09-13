// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Button, ButtonGroup, Grid, Paper } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import DateRangeIcon from "@material-ui/icons/DateRange";
import GroupIcon from "@material-ui/icons/Group";
import TimerIcon from "@material-ui/icons/Timer";
import Developer from "../assets/developer.png";
import student from "../assets/student.jpg";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";

import { oneCourseDetails } from "../actions/courseActions";
// Loader
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const loadRazorPay = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    // script.onload = displayRazorPay;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

function CoursePage({ match }) {
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courseDetails);
  const { loading, error, course } = courseDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bearerToken = localStorage.getItem("token");

  // to handle headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  useEffect(() => {
    dispatch(oneCourseDetails(match.params.id));
  }, [dispatch, match]);

  const handleRazorpayResponse = async (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    const orderData = await axios.post(
      "/order/createOrder",
      {
        date: Date.now(),
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        courseId: course.data._id,
      },
      config
    );
    if (orderData.data.success === true) {
      alert("Course enrolled successfully");
    } else {
      alert("Error in enrolling course");
    }
  };

  const displayRazorPay = async () => {
    const res = await loadRazorPay();

    if (!res) {
      alert("Razorpay SDK Failed. Please check your connection.");
      return;
    }

    const { data } = await axios.post("/course/razorpay");

    // console.log(data);

    const options = {
      key: "rzp_test_tOsI14GHZSP3U8", // Enter the Key ID generated from the Dashboard
      // amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      // currency: "INR",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      name: "Full Stack Simplified",
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        handleRazorpayResponse(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );
      },
      prefill: {
        // name: "Gaurav Kumar",
        name: userInfo.data.name,
        // email: "gaurav.kumar@example.com",
        email: userInfo.data.email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#DC143C",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
    // rzp1.on("payment.failed", function (response) {
    //   alert(response.error.code);
    //   alert(response.error.description);
    //   alert(response.error.source);
    //   alert(response.error.step);
    //   alert(response.error.reason);
    //   alert(response.error.metadata.order_id);
    //   alert(response.error.metadata.payment_id);
    // });
  };

  return loading === false ? (
    <div className="App">
      <div className="big-box">
        <h1 className="big-text">
          {/* Web Development <br /> MERN Stack */}
          {course.data.name}
          <br />- {course.data.tagline}
        </h1>
        <br />
        <p className="small-text">
          {/* The Complete Web Development Course - Mastering MongoDB, ExpressJS,
          ReactJS, NodeJS */}
          {course.data.description}
        </p>
        <br />

        <span className="big-btn">
          <Button
            className="btnbtn"
            variant="contained"
            onClick={displayRazorPay}
          >
            <span className="btn-text">
              Enroll Now
              <br />
              for Rs.{course.data.price}
              {/* for Rs.699 */}
            </span>
          </Button>
        </span>
      </div>
      <div className="half-div">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4}>
            <p className="half-div-text">
              <VideocamIcon className="icons" />
              Premium Course
            </p>
          </Grid>
          <Grid item xs={6} sm={4}>
            <p className="half-div-text">
              <HeadsetMicIcon className="icons" />
              Live Doubt Solving
            </p>
          </Grid>
          <Grid item xs={6} sm={4}>
            <p className="half-div-text">
              <VerifiedUserIcon className="icons" />
              Certificate
            </p>
          </Grid>
          <Grid item xs={6} sm={4}>
            <p className="half-div-text">
              <DateRangeIcon className="icons" />
              Lifetime Access
            </p>
          </Grid>
          <Grid item xs={6} sm={4}>
            <p className="half-div-text">
              <GroupIcon className="icons" />
              Mentorship
            </p>
          </Grid>
          <Grid item xs={6} sm={4}>
            <p className="half-div-text">
              <TimerIcon className="icons" />
              Self-Paced
            </p>
          </Grid>
        </Grid>
      </div>
      <br />
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <h1>Curriculum</h1>
        <p>✔19sections ✔ 242ectures ✔ 55h 23m total length</p>
        <br />
        <Grid container spacing={2}>
          {course.data.chapters.map((chapter) => (
            <Grid item xs={12} sm={6} className="course-item">
              <p className="">
                {chapter.chapterNumber}.&nbsp;
                {chapter.chapterName}
              </p>
            </Grid>
          ))}
          {/* <Grid item xs={12} sm={6} className="course-item">
            <p className="">Introduction</p>
          </Grid>

          <Grid item xs={12} sm={6} className="course-item">
            <p className="">Introduction</p>
          </Grid>
          <Grid item xs={12} sm={6} className="course-item">
            <p className="">Introduction</p>
          </Grid>
          <Grid item xs={12} sm={6} className="course-item">
            <p className="">Introduction</p>
          </Grid> */}
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className="course-item">
          <Card className="">Introduction</Card>
          </Grid>

          <Grid item xs={12} sm={6} className="course-item">
          <Card className="">Introduction</Card>
          </Grid>
          <Grid item xs={12} sm={6} className="course-item">
          <Card className="">Introduction</Card>
          </Grid>
          <Grid item xs={12} sm={6} className="course-item">
          <Card className="">Introduction</Card>
          </Grid>
          </Grid> */}
      </div>

      <br />
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          backgroundColor: "rgb(203, 203, 255)",
        }}
      >
        <h1 style={{ paddingTop: "70px" }}>Course Advantages</h1>
        <Grid container spacing={2}>
          <ul>
            {course.data.advantages.map((advantage) => (
              <Grid item xs={12} sm={12}>
                <li>
                  <p className="">{advantage.advantageName}</p>
                </li>
              </Grid>
            ))}

            {/* <Grid item xs={12} sm={12}>
              <li>
                <p className="">Be able to build ANY website you want.</p>
              </li>
            </Grid>
            <Grid item xs={12} sm={12}>
              <li>
                <p className="">
                  Become a front-end and Back-end developer - Complete Full
                  Stack Developer
                </p>
              </li>
            </Grid>
            <Grid item xs={12} sm={12}>
              <li>
                <p className="">
                  Build fully-fledged websites and web apps for your startup or
                  business.
                </p>
              </li>
            </Grid>
            <Grid item xs={12} sm={12}>
              <li>
                <p className="">Work as a freelance web developer.</p>
              </li>
            </Grid> */}
          </ul>
        </Grid>
        <img src={Developer} className="developer-image" alt="pic" />
      </div>
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <h1 style={{ paddingTop: "70px" }}>About this Course</h1>
        <ul>
          <li style={{ lineHeight: 3 }}>
            This course doesn't cut any corners, tens of real-world projects
            which you will get to build.
          </li>
          <li style={{ lineHeight: 3 }}>
            The curriculum was developed over a period of four years, with
            comprehensive student testing and feedback.
          </li>
          <li style={{ lineHeight: 3 }}>
            You'll save yourself over Rs 50,000 by enrolling, but still get
            access to the same teaching materials and learn from the same
            instructor and curriculum as our in-person programming bootcamp.
          </li>
          <li style={{ lineHeight: 3 }}>
            The course is constantly updated with new content, with new projects
            and modules determined by students - that's you!
          </li>
        </ul>
        <img src={student} className="student-image" alt="student" />
      </div>

      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingBottom: "10%",
          backgroundColor: "rgb(203, 203, 255)",
        }}
      >
        <h1 style={{ paddingTop: "70px" }}>Have some query?</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Why should I opt for FullStackSimplified?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              FullStackSimplified provides you the professional curated content
              by Indian instructors along with live doubt solving and personal
              one to one mentorship which you won't find anywhere else.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              What is the validation of the courses and when can I watch them?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You will have lifetime access to the courses and can watch the
              lectures anytime you want. So it is totally flexible and provides
              you the comfort of learning anytime anywhere. Also as the
              technologies progress we keep on updating our courses so you get
              the access to them too.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How will my doubts be solved and will I have one-to-one
              interaction?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your doubts will be solved on a live chat, as soon as you get a
              doubt just ping your mentor through the chat option and within
              5-10 minutes you will be connected to him to solve your doubts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Why don't you provide live classes and why should I prefer
              recorded sessions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              FullStackSimplified doesn't believe in the idea of teaching 100
              students in 1 class where the student sometimes feels hesitant to
              ask some doubts and where the other student feels that this
              student is wasting his time by asking silly doubts. Moreover in
              this busy world it becomes difficult to attend the classes on a
              specific schedule. So we combined the benefits and provide you
              interactive video lectures and live one on one doubt solving to
              learn at your own pace and comfort.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
}

export default CoursePage;