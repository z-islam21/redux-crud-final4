import axios from "axios";
import * as types from "../../constants/actionTypes";
import { urlStuffs } from "../../utilities/reuseStuffs";

// action creation functions
export const addStudentRequest = () => ({
  type: types.STUDENT_ADD_REQUEST,
});

export const addStudentSuccess = (data) => ({
  type: types.STUDENT_ADD_SUCCESS,
  payload: {
    studentData: data,
    success: "Student added successfully !",
  },
});

export const addStudentFailure = (error) => ({
  type: types.STUDENT_ADD_FAILURE,
  payload: {
    error: error,
  },
});

// action fetching function
export const getAllStudentsRequest = () => ({
  type: types.GET_ALL_STUDENTS_REQUEST,
  payload: {
    message: "NO DATA FOUND !",
  },
});

// export const getAllStudentsSuccess = (data) => ({
//   type: types.GET_ALL_STUDENTS_SUCCESS,
//   payload: data,
// });

// export const getAllStudentsFailure = (error) => ({
//   type: types.GET_ALL_STUDENTS_FAILURE,
//   payload: {
//     error: error,
//   },
// });

// MAIN Action to create
export const createStudent = (data) => async (dispatch) => {
  console.log("action: ", data);

  try {
    dispatch(addStudentRequest());

    const { responseData } = await axios.post(urlStuffs.addStudentURL, data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("addUrl", urlStuffs.addStudentURL);
    dispatch(addStudentSuccess(responseData));
  } catch (error) {
    console.log(error);
    dispatch(addStudentFailure(error.message));
  }
};

// MAIN Action to fetch
export const fetchStudent = () => async (dispatch) => {
  try {
    dispatch(getAllStudentsRequest());
    // console.log(urlStuffs.getStudentsURL);

    const { data } = await axios.get(urlStuffs.getStudentsURL);
    console.log("data-from-Action=>", data);

    dispatch({
      type: types.GET_ALL_STUDENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_ALL_STUDENTS_FAILURE,
      payload: {
        error: error,
      },
    })
  }
};
