import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("Please enter your text");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addItemToList(inputValue);
    setInputValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Enter text"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
