import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@material-ui/core";

import { allInstructorCoursesAction } from "../actions/courseActions";
import { Link } from "react-router-dom";

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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing(1),

    justifyContent: "center",
  },
}));

function MyCoursesInstr({ history, match }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const allInstructorCourse = useSelector((state) => state.allInstructorCourse);
  const { loading, instructorCourses } = allInstructorCourse;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) dispatch(allInstructorCoursesAction(userInfo.data._id));
  }, [dispatch, history]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={homePageTheme}>
        <Header />
      </ThemeProvider>

      {loading === true ? (
        <CircularProgress />
      ) : (
        <main
        // className={clsx(classes.content, {
        //   [classes.contentShift]: open,
        // })}
        >
          <div className={classes.drawerHeader} />
          <Box textAlign="center">
            <Link to={`/createCourse`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<AddCircleIcon />}
              >
                Add New Course
              </Button>
            </Link>
          </Box>
          {instructorCourses.data.map((course) => (
            <>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={course.image}
                    title="MERN stack"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    to={`/course/${course._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button size="large" color="primary">
                      Go To Course
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </>
          ))}
        </main>
      )}
    </div>
  );
}
export default MyCoursesInstr;
