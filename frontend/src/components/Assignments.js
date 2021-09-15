import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import GetAppIcon from "@material-ui/icons/GetApp";
// import Header from "./Header";
// import {Button} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// or
import { Button } from "@material-ui/core";
// import { generatePDF } from "../generatePdf";

//PROGRESS
import { CircularProgress } from "@material-ui/core";

// import PDFLib from "pdf-lib";
import { PDFDocument, rgb } from "pdf-lib";
// import "./FileSaver";
import { saveAs } from "file-saver";
import { Fontkit } from "pdf-lib/cjs/types/fontkit";

// const useStyles = makeStyles({

//     table: {
//       minWidth: 650,
//     },
//   });

// const useStyles = makeStyles((theme) => ({

//   }));

import { createTheme, ThemeProvider } from "@material-ui/core";

// Importing Header
import Header from "./Header";
import axios from "axios";

const homePageTheme = createTheme({
  palette: {
    primary: {
      main: "#809FFF",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#FEFFFF",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://media.istockphoto.com/vectors/online-education-vector-id960268208)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "60%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function createData(assignmentCourseName, assignmentStatus, isCertified) {
  return { assignmentCourseName, assignmentStatus, isCertified };
}
const DownloadButton = () => {
  return (
    <Button variant="contained" color="primary">
      DOWNLOAD <GetAppIcon />
    </Button>
  );
};

// const rows = [
//   createData(
//     <p style={{ paddingLeft: "20%" }}>MERN Development</p>,
//     <center>Pending</center>,
//     <center>
//       <DownloadButton />
//     </center>
//   ),
// ];

const Assignments = ({ history, match }) => {
  const classes = useStyles();
  const [assignments, setAssignments] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "http://localhost:8080/assignment/getAssignmentsOfUser/613a39c9efca784f73c51932",
      { method: "GET" }
    )
      .then((response) =>
        // console.log(response);
        // return response;
        response.json()
      )
      .then((response) => {
        setAssignments(response);
        setLoaded(true);
        return response;
      });
    console.log(assignments.data);
  }, [match, history]);

  // const generatePDF = async (name, course) => {
  //   // const { PDFDocument, rgb } = PDFLib;

  //   // so that we can edit it
  //   const exBytes = await fetch("./_Certificate.pdf").then((res) => {
  //     return res.arrayBuffer();
  //   });
  //   console.log(exBytes);

  //   const exFont = await fetch("./Sanchez-Regular.ttf", {
  //     header: {
  //       "Content-Type": "application/pdf",
  //     },
  //   }).then((res) => {
  //     return res.arrayBuffer();
  //   });
  //   console.log(exFont);

  //   //   Converting bytes to a pdf doc
  //   const pdfDoc = await PDFDocument.load(exBytes);

  //   pdfDoc.registerFontkit(Fontkit);
  //   const myFont = await pdfDoc.embedFont(exFont);

  //   const pages = pdfDoc.getPages();
  //   const firstPage = pages[0];

  //   firstPage.drawText(name, {
  //     x: 250,
  //     y: 290,
  //     size: 58,
  //     color: rgb(0.9, 0.1, 0.2),
  //   });

  //   firstPage.drawText(course, {
  //     x: 425,
  //     y: 240,
  //     size: 18,
  //   });
  //   const url1 = "./sergio.png";
  //   const arrayBuffer1 = await fetch(url1).then((res) => res.arrayBuffer());
  //   const sergio = await pdfDoc.embedPng(arrayBuffer1);

  //   firstPage.drawImage(sergio, {
  //     x: 220,
  //     y: 130,
  //     height: 60,
  //     width: 90,
  //   });

  //   const url2 = "./raquel.png";
  //   const arrayBuffer2 = await fetch(url2).then((res) => res.arrayBuffer());
  //   const raquel = await pdfDoc.embedPng(arrayBuffer2);

  //   firstPage.drawImage(raquel, {
  //     x: 520,
  //     y: 130,
  //     height: 60,
  //     width: 90,
  //   });

  //   const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  //   saveAs(uri, "Completion Certficate.pdf", { autoBom: true });

  //   // document.querySelector("#mypdf").src = uri;
  // };

  const submitPdfButtonHandler = async (
    e,
    assignmentUserName,
    assignmentCourse,
    assignmentUserEmail
  ) => {
    e.preventDefault();
    console.log(assignmentUserName, assignmentCourse, assignmentUserEmail);
    fetch(
      `http://localhost:8080/getCertificate/${assignmentUserName}/${assignmentCourse}`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        // console.log(response);
        // return response;
        console.log(response);
        // response.json();
      })
      .then((response) => {
        // setAssignments(response);
        // setLoaded(true);
        // return response;
        console.log(response);
      });
    // axios.post("/", { name: "Raj Sanghavi", course: "DJ SANGHVI" });

    // generatePDF(assignmentUserName, assignmentCourse);
  };

  return (
    <div
      style={{
        padding: "5%",
        backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
      }}
    >
      <ThemeProvider theme={homePageTheme}>
        <Header />
      </ThemeProvider>
      <h1 style={{ paddingTop: "30px" }}>Assignments</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <h1>Course Name</h1>
              </TableCell>
              <TableCell align="center">
                <h1>Status</h1>
              </TableCell>
              <TableCell align="center">
                <h1>Download Certificate</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loaded === false ? (
              <CircularProgress />
            ) : assignments.data.length === 0 ? (
              <center>
                <p style={{ color: "red" }}>
                  You have not enrolled in any course yet
                </p>
              </center>
            ) : (
              assignments.data.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    <p style={{ paddingLeft: "20%" }}>{row.courseId.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <center>
                      {row.assignmentStatus === "unsubmit" ? (
                        <div>
                          <p>Pending</p>
                          <p style={{ color: "red" }}>
                            Assignment is not submitted yet
                          </p>
                        </div>
                      ) : row.assignmentStatus === "submit" ? (
                        "Submitted"
                      ) : (
                        "Completed"
                      )}
                    </center>
                    {/* {row.assignmentStatus} */}
                  </TableCell>
                  <TableCell align="right">
                    <center>
                      <Button
                        id="submitPdfButton"
                        disabled={row.isCertified === false}
                        variant="contained"
                        color="primary"
                        onClick={(e) =>
                          submitPdfButtonHandler(
                            e,
                            row.userId.name,
                            row.courseId.name,
                            row.userId.email
                          )
                        }
                      >
                        DOWNLOAD <GetAppIcon />
                      </Button>
                      {row.isCertified === false ? (
                        <p style={{ color: "red" }}>
                          Assignment is not certified yet
                        </p>
                      ) : (
                        <p></p>
                      )}
                    </center>
                  </TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Assignments;
