import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,

  CREATE_USER_BEGIN,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_CLEAR,
} from '../actions/userActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  success: null,

  newUser: null,
  createUserError: null,
  createUserSuccess: null,
  createUserLoading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.users,
        totalItems: action.payload.totalItems,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

      case CREATE_USER_BEGIN:
        return {
          ...state,
          createUserLoading: true,
          createUserError: null
        };
  
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          createUserLoading: false,
          newUser: action.payload.user,
          createUserSuccess: true
        };
  
      case CREATE_USER_FAILURE:
        return {
          ...state,
          createUserLoading: false,
          createUserError: action.payload.error,
        };
  
      case CREATE_USER_CLEAR:
        return {
          ...state,
          createUserLoading: false,
          createUserSuccess: null,
          createUserError: null,
        };
    default:
      return state;
  }
}
