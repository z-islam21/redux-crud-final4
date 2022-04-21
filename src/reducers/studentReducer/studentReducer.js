import {
  STUDENT_ADD_FAILURE,
  STUDENT_ADD_REQUEST,
  STUDENT_ADD_SUCCESS,
  GET_ALL_STUDENTS_SUCCESS,
  GET_ALL_STUDENTS_REQUEST,
  GET_ALL_STUDENTS_FAILURE,
} from "../../constants/actionTypes";

const INITIAL_STATE = {
  students: [],
  loading: true,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_ADD_SUCCESS:
      return {
        loading: false,
        students: [action.payload.studentData],
        success: action.payload.success,
      };
    case STUDENT_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case GET_ALL_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      };
    case GET_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };
    case GET_ALL_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: action.payload.error,
      };
    default:
      return state;
  }
};

export default studentReducer;
