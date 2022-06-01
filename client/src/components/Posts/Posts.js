import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = ({ setCurrentID }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (!posts.length ? 
    <CircularProgress />
   : 
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        // changing key to id to avoid warning and 
        //assigning key a value if index doesnt give warning 
        //but still gives the repeated post error
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentID={setCurrentID} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
