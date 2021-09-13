import {
  ONE_COURSE_DETAILS_REQUEST,
  ONE_COURSE_DETAILS_SUCCESS,
  ONE_COURSE_DETAILS_FAILS,
  ALL_USER_COURSES_REQUEST,
  ALL_USER_COURSES_SUCCESS,
  ALL_USER_COURSES_FAILS,
} from "../constants/courseConstants";

// Partiicular course details
export const oneCourseDetailsReducer = (
  state = { course: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ONE_COURSE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ONE_COURSE_DETAILS_SUCCESS:
      return { loading: false, course: action.payload };
    case ONE_COURSE_DETAILS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allUserCoursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case ALL_USER_COURSES_REQUEST:
      return { loading: true, courses: [] };
    case ALL_USER_COURSES_SUCCESS:
      return { loading: false, courses: action.payload };
    case ALL_USER_COURSES_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
