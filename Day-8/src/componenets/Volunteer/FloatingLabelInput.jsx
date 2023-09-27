import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
      "& .MuiOutlinedInput-input": {
        backgroundColor: "#fff", // Set the background color to white
        borderRadius: "10px",
      },
      "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(14px, -6px)", // Move the label up without the line
      },
    },
  },
}));

const FloatingLabelInput = ({ label }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      label={label}
      variant="outlined"
      fullWidth
    />
  );
};

export default FloatingLabelInput;
