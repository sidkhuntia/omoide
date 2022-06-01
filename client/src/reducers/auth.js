import * as actions from "../constants/actionTypes";

const authReducers = (state = { authData: null }, action) => {
  switch (action.type) {
    case actions.AUTH:
      console.log(action?.payload);
      return state;
    case actions.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authReducers;
