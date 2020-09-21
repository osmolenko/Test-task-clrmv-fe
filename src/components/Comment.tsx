import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  author: {
    float: "right",
    margin: "0 5% 0 10px",
  },
});

export default function Comment(props: any) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="body2"> {props.text}</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="button" className={classes.author}>
          {props.author}
        </Typography>
        <Button color="secondary">Удалить</Button>
        <Button color="primary">Изменить</Button>
      </CardActions>
    </Card>
  );
}
