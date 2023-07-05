import * as actionTypes from "./login.actionTypes";

export const loginRequest = (username, password) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
