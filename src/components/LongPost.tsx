import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: "80%",
  },
  actions: {
    float: "right",
    justifyItems: "space-around",
  },
  author: {
    float: "right",
    marginTop: "5px",
  },
  h1: {
    marginTop: "10px",
    lineHeight: "170%",
  },
});

export default function LongPost(props: any) {
  const classes = useStyles();
  console.log(typeof props);
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="caption" className={classes.author}>
            {props.author}
          </Typography>
          <Typography variant="h4">{props.heading}</Typography>
          <Typography variant="body1" className={classes.h1}>
            {props.text}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small">Read</Button>
        </CardActions>
      </Card>
    </div>
  );
}
