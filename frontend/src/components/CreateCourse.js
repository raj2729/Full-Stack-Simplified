import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    display: "block",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
  detailTitle: {
    textDecoration: "underline",
  },
}));

export default function CreateCourse() {
  const classes = useStyles();
  const [Title, setTitle] = useState("");
  const [tagline, settagline] = useState("");
  const [type, settype] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [description, setdescription] = useState("");
  const [TitleError, setTitleError] = useState(false);
  const [taglineError, settaglineError] = useState(false);
  const [typeError, settypeError] = useState(false);
  const [imgurlError, setimgurlError] = useState(false);
  const [descriptionError, setdescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    settypeError(false);
    settaglineError(false);
    setdescriptionError(false);
    setimgurlError(false);

    if (Title == "") setTitleError(true);
    if (tagline == "") settaglineError(true);
    if (imgurl == "") setimgurlError(true);
    if (type == "") settypeError(true);
    if (description == "") setdescriptionError(true);
  };

  return (
    <Container>
      <Box m={2} pt={3}>
        <Typography
          variant="h5"
          className={classes.detailTitle}
          gutterBottom
          color="secondary"
          align="center"
          component="h2"
        >
          Create a New Course{" "}
        </Typography>
      </Box>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          colour="secondary"
          fullWidth
          required
          error={TitleError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => settagline(e.target.value)}
          label="Tag Line"
          variant="outlined"
          colour="textSecondary"
          fullWidth
          required
          error={taglineError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => settype(e.target.value)}
          label="Type"
          variant="outlined"
          colour="textSecondary"
          fullWidth
          required
          error={typeError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setimgurl(e.target.value)}
          label="Course Image URL"
          variant="outlined"
          colour="textSecondary"
          fullWidth
          required
          error={imgurlError}
        />

        <TextField
          className={classes.field}
          onChange={(e) => setdescription(e.target.value)}
          label="Description"
          variant="outlined"
          colour="textSecondary"
          multiline
          rows={15}
          fullWidth
          required
          error={descriptionError}
        />

        <Button
          type="submit"
          size="large"
          classes={{
            root: classes.root,
            label: classes.label,
          }}
          startIcon={<AddCircleIcon />}
        >
          Add Course
        </Button>
      </form>
    </Container>
  );
}
