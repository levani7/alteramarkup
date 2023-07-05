import { takeLatest, put, call } from "redux-saga/effects";
import * as actionTypes from "./login.actionTypes";
import { loginSuccess, loginFailure } from "./login.action";
import AppAPI from "../../services/AppApi"; // Import your API functions for authentication

function* signupSaga(action) {
  const { user } = action.payload;

  try {
    yield call(AppAPI.post, "/auth/signup", user); // Call the post method from AppApi using the `call` effect
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* watchSignupRequest() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, signupSaga);
}

export default function* authSaga() {
  yield watchSignupRequest();
  // Add more sagas here if needed
}
