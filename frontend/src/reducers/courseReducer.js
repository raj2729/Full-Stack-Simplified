import {
  ONE_COURSE_DETAILS_REQUEST,
  ONE_COURSE_DETAILS_SUCCESS,
  ONE_COURSE_DETAILS_FAILS,
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
