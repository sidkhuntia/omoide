import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";

import useStyles from "./styles.js";

const Paginate = () => {
  const classes = useStyles();

//   const handleChange = (event, value) => {
//     setCurrentPage(value);
//   };
  return (
    <Pagination
      count={5}
      page={1}
      classes={{ ul: classes.ul }}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
};

export default Paginate;
