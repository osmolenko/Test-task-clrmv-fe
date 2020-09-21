import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Post from "./Post";
import Fab from "@material-ui/core/Fab";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles({
  posts: {
    margin: "20px 0 0 10%",
    width: "80%",
  },
  icon: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  },
});

export default function Mainpage() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.posts}>
        <Post
          variant="short"
          author="Author"
          heading="First post"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
          corporis culpa delectus deserunt doloremque ea facere molestiae natus
          nisi numquam officiis perferendis quasi quos, recusandae reprehenderit
          ullam velit, voluptates! Lorem ipsum 312321312321132dolor sit amet, consectetur
          adipisicing elit. Aliquam at consequatur ducimus eligendi ex illum
          maxime minima molestias moll32132131321itia non quae quo quos ratione, soluta
          temporibus tenetur ullam unde ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
          corporis culpa delectus deserunt doloremque ea facere molestiae natus
          nisi numquam officiis perferendis quasi quos, recusandae reprehenderit
          ullam velit, voluptates! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aliquam at consequatur ducimus eligendi ex illum
          maxime minima molestias mollitia non quae quo quos ratione, soluta
          temporibus tenetur ullam unde ut?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut
          corporis culpa delectus deserunt doloremque ea facere molestiae natus
          nisi numquam officiis perferendis quasi quos, recusandae reprehenderit
          ullam velit, voluptates! Lorem ipsum 312321312321132dolor sit amet, consectetur
          adipisicing elit."
        />
      </div>

      <Fab color="primary" aria-label="add" className={classes.icon}>
        <Add />
      </Fab>
    </div>
  );
}
