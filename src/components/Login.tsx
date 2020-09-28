import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loginForm: {
    textAlign: "center",
    width: "50vw",
    margin: "25vh 25vw 25vh 25vw",
  },
});

export default class Login extends React.Component<
  {},
  { login: string; password: string; isAuth: boolean }
> {
  constructor(props) {
    super(props);
    this.setState({
      isAuth: false,
      login: "",
      password: "",
    });
  }

  submit = () => {
    alert(`Login: ${this.state.login} / Password: ${this.state.password}`);
  };

  changeHandler = (event: any) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const classes = useStyles();
    return (
      <Box className={classes.loginForm}>
        <Typography component="h2" variant="h4" align="center" paragraph>
          Blog
        </Typography>
        <form>
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
            onChange={this.changeHandler}
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
            onChange={this.changeHandler}
          />
          <Button type="submit" fullWidth variant="outlined" color="default">
            Sign in
          </Button>
        </form>
      </Box>
    );
  }
}
