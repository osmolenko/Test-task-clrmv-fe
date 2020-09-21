import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  loginbtn: {
    position: "absolute",
    right: "20px",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Blog</Typography>
          <Button color="inherit" className={classes.loginbtn}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
