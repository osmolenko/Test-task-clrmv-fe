import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  loginForm: {
    textAlign: "center",
  },
});

export default class Login extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      hits: [],
    };
  }

  render() {
    return (
      <Box className="LoginForm">
        <Typography component="h2" variant="h4" align="center" paragraph>
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            label="Login"
            name="login"
            autoComplete="login"
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="outlined" color="default">
            Sign in
          </Button>
        </form>
      </Box>
    );
  }
}
