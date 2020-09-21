import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Post from "./Post";
import AddComment from "./AddComment";
import Comment from "./Comment";

const useStyles = makeStyles({
  content: {
    margin: "20px 0 0 10%",
    width: "80%",
  },
  addcmt: {
    margin: "20px 0",
  },
  cmnts: {
    margin: "50px 0",
  },
});

export default function OpenPost() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Post
          variant="long"
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
        <AddComment />
        <div className={classes.cmnts}>
          <Comment text="Darova uebok" author="osmolenko" />
        </div>
      </div>
    </div>
  );
}
