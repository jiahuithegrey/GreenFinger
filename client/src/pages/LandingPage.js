import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./logo.jpg";

import { lightGreen } from "@material-ui/core/colors";
// import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: { lightGreen }
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <img src={Logo} style= {{ width: 100 }} alt="" />
        <Typography component="h1" variant="h5">
          Thrive
        </Typography>
        <Button
          type="submit"
          href="SignUp"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Get Started with Thrive
        </Button>

        <Grid container justify="flex-end">
            <Grid item>
              <Link href="SignIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}
