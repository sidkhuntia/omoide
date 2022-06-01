import * as api from "../api";
import * as actions from "../constants/actionTypes";

export const signin = (formData,history) => async (dispatch) => {
  try {
    // const { data } = await api.signin(formData, history);
    // dispatch({ type: actions.SIGNIN, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData,history) => async (dispatch) => {
  try {
    // const { data } = await api.signup(formData, history);
    // dispatch({ type: actions.SIGNIN, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
