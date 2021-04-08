import axios from "axios";

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const CREATE_USER_BEGIN = 'CREATE_USER_BEGIN';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const CREATE_USER_CLEAR = 'CREATE_USER_CLEAR';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = (users, totalItems) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users, totalItems }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());

    return axios.get(`http://localhost:5000/users`)
      .then(json => {
        dispatch(fetchUsersSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchUsersFailure(error)));
  };
}

export const createUserBegin = () => ({
  type: CREATE_USER_BEGIN
});

export const createUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  payload: { user }
});

export const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: { error }
});

export const createUserClear = () => ({
  type: CREATE_USER_CLEAR
});

export function createUser(values) {
  return dispatch => {
    dispatch(createUserBegin());
    return axios.post(`http://localhost:5000/users`,
      values
    )
      .then(json => {
        dispatch(createUserSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(createUserFailure(error.response.data)));
  };
}