import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import googleReducer from "./googleReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
 
  general: generalReducer,
  googledata:googleReducer,
  alert:alertReducer
 
});
