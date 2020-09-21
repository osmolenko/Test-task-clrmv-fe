import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  field: {
    margin: "20px 0 10px 0",
  },
  btn: {
    float: "right",
    marginLeft: "200px",
  },
});

export default function AddComment() {
  const classes = useStyles();
  return (
    <form>
      <TextField
        className={classes.field}
        id="outlined-multiline-static"
        label="Комментарий"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" className={classes.btn}>
        Отправить
      </Button>
    </form>
  );
}
