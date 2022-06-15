import * as api from "../api"; //import everything from the actions as api

// action creators
export const getPosts = () => async (dispatch) => {
  try {
    // fetch all posts from the API
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
