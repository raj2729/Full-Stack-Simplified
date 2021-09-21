import React from "react";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
// import "./profilepage.css"
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import coursesEnrolled from "../assets/courses-enrolled.svg";
import coursesCompleted from "../assets/courses-completed.svg";
// import { Box } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@material-ui/core";

// Importing Header
import Header from "./Header";

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

const useStyles = makeStyles({
  profileCard: {
    width: "85% !important",

    /* display: flex !important; */
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "30px auto !important",
    margin: "2% !important",
    boxShadow: "5px 5px 25px 5px gray !important",
    borderRadius: "30px !important",
    zIndex: "0",
    marginLeft: "8% !important",
  },
  profilePic: {
    borderRadius: "999px",
    width: "150px",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "70px auto !important",
    position: "relative",
    bottom: "10px",
    padding: "1%",
    border: "5px solid gray",
    zIndex: "1",
  },
  name: {
    textAlign: "center",
    position: "relative",
    bottom: "30px",
  },
  description: {
    padding: "5%",
    marginTop: "-50px",
    marginLeft: "20px",
  },
  table: {
    minWidth: "400 !important",
    width: "70% !important",
    padding: "4% !important",
    /* margin: 5%; */
    boxShadow: "5px 5px 25px 5px gray !important",
    borderRadius: "30px !important",
    display: "flex !important",
    /* justify-content: center !important; */
    /* align-items: center !important; */
    margin: "5% auto !important",
    /* height: 400px; */
  },
  tableText: {
    fontWeight: "bold",
    color: "rgb(0, 153, 255)",
    /* line-height: -10px; */
  },
  editBtn: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "5px auto !important",
    borderRadius: "999px",
  },
  smallCard: {
    width: "70%",
    /* display: flex !important; */
    justifyContent: "center !important",
    alignItems: "center !important",
    margin: "10px auto !important",
    boxShadow: " 5px 5px 25px 5px gray !important",
    borderRadius: "30px !important",
    padding: "3%",
    height: "50%",
    paddingLeft: "50px",
    /* margin-bottom: 100px; */
  },
  numOfCourses: {
    fontSize: "60px",
    position: "relative",
    bottom: "80px",
  },
  smallCardImg: {
    width: "200px",
    /* z-index: 100;
     */
    position: "relative",
    bottom: "200px",
    right: "-100px",
    margin: "5%",
  },
});

function createData(name, calories, fat, carbs, protein) {
  //   const s = typeof name;
  console.log(name);
  return { name, calories, fat, carbs, protein };
}

function ProfilePage() {
  const classes = useStyles();
  const rows = [
    createData(<p className={classes.tableText}>Name</p>, "Darshan Raval"),
    createData(<p className={classes.tableText}>Email</p>, "darshan@gmail.com"),
    createData(
      <p className={classes.tableText}>Github Link</p>,
      "github.github"
    ),
    createData(
      <p className={classes.tableText}>LinkedIn Link</p>,
      "facebook link"
    ),
    createData(<p className={classes.tableText}>Mobile No.</p>, "111111111111"),
    createData(
      <p className={classes.tableText}>Skills/ Domains</p>,
      "Machine Learning",
      "Web Dev"
    ),
  ];
  return (
    <>
      <ThemeProvider theme={homePageTheme}>
        <Header />
      </ThemeProvider>
      <Box m={2} pt={9} />
      <Card className={classes.profileCard}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <img
              // src="https://res.cloudinary.com/dizvyn9b5/image/upload/v1632215752/mtxpeyrrjcbmmuygtj5z.jpg"
              src="https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241265/sjddbfkcij5tz8vokcmo.jpg"
              // src="https://res.cloudinary.com/dizvyn9b5/image/upload/v1632241300/oxndm5wvrwbmgoortsbs.jpg"
              alt="pic"
              className={classes.profilePic}
            />
            <h1 className={classes.name}>Darshan Raval</h1>
            <p className={classes.description}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <Button
              variant="contained"
              color="primary"
              className={classes.editBtn}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TableContainer component={Paper} className={classes.table}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Q</TableCell>
            <TableCell>A</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      {/* {row.protein.map((prot) => (
                        <TableCell align="right">{prot.skill}</TableCell>
                      ))} */}
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Card className={classes.smallCard}>
            <h3 style={{ color: "gray" }}>Courses Enrolled</h3>
            <br />
            <p className={classes.numOfCourses}>13</p>
            <img src={coursesEnrolled} className={classes.smallCardImg} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.smallCard}>
            <h3 style={{ color: "gray" }}>Courses Completed</h3>
            <br />
            <p className={classes.numOfCourses}>7</p>
            <img src={coursesCompleted} className={classes.smallCardImg} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfilePage;
