import * as actions from "../constants/actionTypes";

export default (state = {isLoading:true, posts:[]}, action) => {
  switch (action.type) {
    case actions.START_LOADING:
      return {...state, isLoading:true}
    case actions.END_LOADING:
      return {...state, isLoading:false}
    case actions.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    case actions.FETCH_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case actions.CREATE:
      return {...state, posts:[ ...state, action.payload ]};
    case actions.UPDATE:
      return {...state, posts:state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )};
    case actions.LIKE:
      return {...state, posts:state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )};
    case actions.DELETE:
      return {...state, posts:state.posts.filter((post) => post._id !== action.payload)};
    default:
      return state;
  }
};
