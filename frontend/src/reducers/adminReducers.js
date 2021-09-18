import {
    ADMIN_LOGIN,
    ADMIN_LOADING,
    ADMIN_ERROR,
    ADMIN_USERS,
    ADMIN_INSTRUCTORS,
    ADMIN_COURSES
  } from "../constants/adminConstants";
  
  const initialState = {
      adminLoading: true,
      adminError: null,
      adminDetails: {},
      allUsers: [],
      allInstructors: [],
      allCourses: []
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
        return {...state, adminLoading: false, allUsers: action.payload};
      case ADMIN_INSTRUCTORS:
        return {...state, adminLoading: false, allInstructors: action.payload};
      case ADMIN_COURSES:
        return {...state, adminLoading: false, allCourses: action.payload}
      default:
        return state;
    }
  };
  