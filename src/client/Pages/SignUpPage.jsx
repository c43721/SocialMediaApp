import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as BrowserLink } from "@reach/router";
import Image from "../Image/KODNING_LOGO.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Kodning
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  forms: {
    width: "100",
    margin: theme.spacing(4, 0, 4, 0),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    color: "white",
  },
  container: {
    backgroundColor: "#85DBCB",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
  },
  image: {
    backgroundImage:
      "url(https://i0.wp.com/bdmpublications.com/wp-content/uploads/2019/05/history-of-coding-1.jpg?resize=780%2C405&ssl=1)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  logo: {
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    position: "absolute",
    padding: theme.spacing(5),
    fontWeight: "bold",
    fontSize: "55px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
  },
  copyRight: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid className={classes.image} xs="false" sm="7">
        <BrowserLink className={classes.logo} to="/" xs="false">
          Kodning
        </BrowserLink>
      </Grid>
      <Grid item xs="12" sm="5">
        <div>
          <Typography component="h1" variant="h5" className={classes.forms}>
            Sign up
          </Typography>
          <form noValidate>
            <Grid>
              <Grid className={classes.forms}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid className={classes.forms}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item className={classes.forms}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item className={classes.forms}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item className={classes.forms}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="confirmPassword"
                  id="confirmPassword"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid
                justifyContent="center"
                display="flex"
                className={classes.button}>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
            <Grid container className={classes.copyRight}>
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
