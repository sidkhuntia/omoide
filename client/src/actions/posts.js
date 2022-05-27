import * as api from "../api";
import * as actions from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: actions.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: actions.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: actions.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: actions.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
}
export const likePost = (id) => async (dispatch) => {
  try {
    await api.likePost(id);
    dispatch({ type: actions.UPDATE, payload: id });
  } catch (error) {
    console.log(error);
  }
}
