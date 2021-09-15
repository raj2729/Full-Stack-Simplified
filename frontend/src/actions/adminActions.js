import axios from "axios";
import {
    ADMIN_ERROR,
    ADMIN_LOADING,
    ADMIN_LOGIN
} from "../constants/adminConstants";

export const adminLogin = (email,password) => async (dispatch) => {
  try {
    dispatch({
        type:ADMIN_LOADING,
        payload:{}
    })
    const { data } = await axios.post(`/admin/adminLogin/`,{email,password});
    if(data==null) {
        dispatch({
            type: ADMIN_ERROR,
            payload: {}
        })
        return;
    } else {
        dispatch({
            type: ADMIN_LOGIN,
            payload: data,
          });
    }
  } catch (error) {
        console.log("error",error)
  }
};
