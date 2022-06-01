import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts.js";
import Forms from "../Forms/Form.js";
import useStyles from "./styles.js";
import Pagination from "../Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentID, setCurrentID] = useState(0);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery") || "";

  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // history.push(`/posts?searchQuery=${search}`);
    }
  };

  const handleAdd = (chip) => {
    setTags([...tags, chip]);
  };

  const handleDelete = (chip) => {
    setTags(tags.filter((tag) => tag !== chip));
  };



  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.gridContainer}
          spacing={3}
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentID={setCurrentID} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <ChipInput
                className={classes.chipInput}
                value={tags}
                label="Search Tags"
                variant="outlined"
                onAdd={handleAdd}
                onDelete={handleDelete}
              />
            </AppBar>
            <Forms setCurrentID={setCurrentID} currentID={currentID} />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
