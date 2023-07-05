import { combineReducers } from "redux";
import loginReducer from "../reducers/login/login.reducer";
const appReducer = combineReducers({
  login: loginReducer,
});

const rootReducer = (state, action) => {
  // clear full state if LOGOUT_USER action was deteceted
  if (action.type === "LOGOUT_USER" || action.type === "SWITCH_SYSTEM_RESET") {
    state = undefined; // NOTE: set only to 'undefined', not to 'null'
  }
  return appReducer(state, action);
};

export default rootReducer;
