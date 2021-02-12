import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import googleReducer from "./googleReducer";
import alertReducer from "./alertReducer";
import allergyReducer from "./allergyReducer";
import restaurantAdminReducer from "./restaurantAdminReducer";


export default combineReducers({
 
  general: generalReducer,
  googledata:googleReducer,
  alert:alertReducer,
  allergy:allergyReducer,
  restaurantAdmin:restaurantAdminReducer,
 
});
