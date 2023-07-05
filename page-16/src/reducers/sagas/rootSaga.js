import { all } from "redux-saga/effects";
import authSaga from "../login/login.saga";

// Import other sagas as needed

export default function* rootSaga() {
  yield all([
    authSaga(),
    // Add other sagas here
  ]);
}
