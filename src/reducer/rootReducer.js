import { combineReducers } from "redux";
import { login } from "./login"

export const rootReducer = combineReducers({
  login,
  hello: () => {
    return "hello";
  }
})