import axios from "axios";
import {
  ONE_COURSE_DETAILS_REQUEST,
  ONE_COURSE_DETAILS_SUCCESS,
  ONE_COURSE_DETAILS_FAILS,
  ALL_USER_COURSES_REQUEST,
  ALL_USER_COURSES_SUCCESS,
  ALL_USER_COURSES_FAILS,
} from "../constants/courseConstants";

export const oneCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_COURSE_DETAILS_REQUEST });
    const { data } = await axios.get(`/course/oneCourse/${id}`);
    dispatch({
      type: ONE_COURSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONE_COURSE_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// AFTER ORDER MODEL
// export const allUserCourses = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: ALL_USER_COURSES_REQUEST,
//     });
//     const { data } = await axios.get("/courses/products");
//     dispatch({
//       type: ALL_USER_COURSES_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_USER_COURSES_FAILS,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
