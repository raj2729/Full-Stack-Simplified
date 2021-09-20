import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
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
});

const CreateChapter = () => {
  const classes = useStyles();
  const [chpName, setChpName] = useState("");
  const [chpNo, setChpNo] = useState("");
  const [description, setDescription] = useState("");
  const [chpNameError, setChpNameError] = useState(false);
  const [chpNoError, setChpNoError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChpNameError(false);
    setChpNoError(false);
    setDescriptionError(false);

    if (chpName == "") setChpNameError(true);
    if (chpNo == "") setChpNoError(true);
    if (description == "") setDescriptionError(true);
  };

  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        color="textPrimaryary"
        marginTop="20"
        align="center"
        component="h2"
      >
        Create a New Chapter{" "}
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setChpNo(e.target.value)}
          className={classes.field}
          label="Chapter Number"
          variant="outlined"
          colour="secondary"
          fullWidth
          required
          error={chpNoError}
        />
        <TextField
          onChange={(e) => setChpName(e.target.value)}
          className={classes.field}
          label="Chapter Name"
          variant="outlined"
          colour="secondary"
          fullWidth
          required
          error={chpNameError}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          className={classes.field}
          label="Description"
          variant="outlined"
          colour="secondary"
          multiline
          rows={15}
          fullWidth
          required
          error={descriptionError}
        />
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button>
        <Box m={2} pt={3}></Box>
        <Button
          type="submit"
          size="large"
          classes={{
            root: classes.root,
            label: classes.label,
          }}
          startIcon={<AddCircleIcon />}
        >
          Add Chapter
        </Button>
      </form>
    </Container>
  );
};

export default CreateChapter;
