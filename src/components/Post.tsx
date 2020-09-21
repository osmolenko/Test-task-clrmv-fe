import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { display } from "@material-ui/system";

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
  db: {
    display: "block",
  },
  dn: {
    display: "none",
  },
});

export default function Post(props: any) {
  const classes = useStyles();

  /*

  Ограничение выводимых символов

*/
  let t: number = props.text.length;
  let resText: string = "";
  let hide: string = "";

  //Если длинный пост возвращаем весь текст
  if (props.variant === "long") {
    resText = props.text;
    hide = classes.dn;
  }
  //иначе
  else {
    //Если длина текста < 500 символов возвращаем текст
    if (t < 500) resText = props.text;
    //Если > обрезаем
    else resText = props.text.slice(0, 500 - t) + "...";
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="caption" className={classes.author}>
          {props.author}
        </Typography>
        <Typography variant="h4">{props.heading}</Typography>
        <Typography variant="body1" className={classes.h1}>
          {resText}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" className={hide}>
          Read
        </Button>
      </CardActions>
    </Card>
  );
}
