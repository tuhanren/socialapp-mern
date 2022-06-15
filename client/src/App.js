import React, { useEffect } from "react";
// material-ui
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// allow to dispatch actions
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import memories from "./images/memories.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch(); //dispatch hook

  useEffect(() => {
    dispatch(getPosts()); //dispatch action
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
