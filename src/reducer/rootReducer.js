import { combineReducers } from "redux";
import { login } from "./login";
import { personnels } from "./personnels"

export const rootReducer = combineReducers({
  login,
  personnels
})