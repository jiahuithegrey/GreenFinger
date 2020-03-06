import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Cactus from "../assets/cactus1.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
}));

export default function Name(props) {
  // constructor(props) {
  //   super(props);
  //   // this.classes = this.useStyles();
  //   // This binding is necessary to make `this` work in the callback
  //   this.saveName = this.saveName.bind(this);
  //   this.state = {
  //     name: ""
  //   };
  //   this.updateInput = this.updateInput.bind(this);
  // }
  const [name, setName] = useState("");

  const classes = useStyles();

  function updateInput(event) {
    setName(event.target.value);
  }

  function saveName() {
    // alert("saveName executed"); for testing
    //grab text from text field and store in local story
    // let name = this.state.name;
    // alert(name);
    localStorage.setItem("plantName", name);
    props.history.push("Location");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h1>What's the name of your plant?</h1>

        <form>
          <TextField
            id="filled-basic"
            placeholder="i.e. cactus"
            label=""
            variant="filled"
            onChange={updateInput}
            required
          />
        </form>

        <Button onClick={saveName} />
        <img src={Cactus} style={{ width: 100 }} alt="" />
      </div>
    </Container>
  );
}
