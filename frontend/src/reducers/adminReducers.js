import {
    ADMIN_LOGIN,
    ADMIN_LOADING,
    ADMIN_ERROR
  } from "../constants/adminConstants";
  
  const initialState = {
      adminLoading: true,
      adminError: false,
      adminDetails: {}
  }

  export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_LOGIN: 
        return {...state, adminError: false, adminLoading: false, adminDetails:action.payload };
      case ADMIN_LOADING:
        return { ...state, adminLoading: true};
      case ADMIN_ERROR:
        return { ...state, adminError: true };
      default:
        return state;
    }
  };
  