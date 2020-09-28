import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  author: {
    fontSize: "0.6rem",
    color: "gray",
    textAlign: "right",
  },
  rightblock: {
    float: "right",
  },
});

export default function Comment(props: any) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <div className={classes.rightblock}>
          <Typography variant="button" className={classes.author}>
            Автор: {props.author}
          </Typography>
          <tr></tr>
          <Typography variant="button" className={classes.author}>
            {props.date}
          </Typography>
        </div>

        <Typography variant="body2"> {props.text}</Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary">Удалить</Button>
        <Button color="primary">Изменить</Button>
      </CardActions>
    </Card>
  );
}
