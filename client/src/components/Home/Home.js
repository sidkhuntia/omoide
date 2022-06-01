import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts.js";
import Forms from "../Forms/Form.js";
import useStyles from "./styles.js";
import Pagination from "../Pagination";

const Home = () => {
  const [currentID, setCurrentID] = useState(0);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          className={classes.grid}
          spacing={3}
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentID={setCurrentID} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Forms setCurrentID={setCurrentID} currentID={currentID} />
            <Paper className={classes.pagination} elevation={6} >
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
