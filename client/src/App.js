import React,  {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'

import omoides from "./images/logo2.png";
import Posts from "./components/Posts/Posts.js";
import Forms from "./components/Forms/Form.js";
import useStyles from "./styles.js";

const App = () => {
  const [currentID, setCurrentID] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);



  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="primary">  
        <Typography variant="h2" align="center">
          Omoides
        </Typography>
        <img
          className={classes.image}
          src={omoides}
          alt="App Logo"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            alignItems="stretch"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms setCurrentID={setCurrentID} currentID={currentID}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
