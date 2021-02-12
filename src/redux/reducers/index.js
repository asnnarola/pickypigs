import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import googleReducer from "./googleReducer";
import alertReducer from "./alertReducer";
import allergyReducer from "./allergyReducer";


export default combineReducers({
 
  general: generalReducer,
  googledata:googleReducer,
  alert:alertReducer,
  allergy:allergyReducer
 
});
