import * as actions from "../constants/actionTypes";

const authReducers = (state = { authData: null }, action) => {
  switch (action.type) {
    case actions.AUTH:
      localStorage.setItem('profile', JSON.stringify({...action?.payload}));
      return {...state, authData : action?.payload};
      case actions.LOGOUT:
        localStorage.removeItem('profile');
        return {...state, authData : null};
      return {};
    default:
      return state;
  }
};

export default authReducers;
