import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import googleReducer from "./googleReducer";

export default combineReducers({
 
  general: generalReducer,
  googledata:googleReducer,
 
});
