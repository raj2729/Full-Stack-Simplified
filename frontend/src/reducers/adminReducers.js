import {
    ADMIN_LOGIN,
    ADMIN_LOADING,
    ADMIN_ERROR,
    ADMIN_USERS
  } from "../constants/adminConstants";
  
  const initialState = {
      adminLoading: true,
      adminError: null,
      adminDetails: {},
      allUsers: []
  }

  export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_LOGIN: 
        return {...state, adminError: null, adminLoading: false, adminDetails:action.payload };
      case ADMIN_LOADING:
        return { ...state, adminLoading: true};
      case ADMIN_ERROR:
        return { ...state, adminError: action.payload };
      case ADMIN_USERS:
        return {...state, allUsers: action.payload}
      default:
        return state;
    }
  };
  