import { combineReducers } from "redux";
import generalReducer from "./generalReducer";
import googleReducer from "./googleReducer";
import alertReducer from "./alertReducer";
import allergyReducer from "./allergyReducer";
import restaurantAdminReducer from "./restaurantAdminReducer";
import userProfileReducer from "./userProfileReducer";
import dishReducer from "./dishReducer";
import homePageReducer from "./homePageReducer";
import restaurantSearchPageReducer from "./restaurantSearchPageReducer";
import restaurantMenuTabReducer from "./restaurantMenuTabReducer";
import restaurantListPageReducer from "./restaurantListPageReducer";
import dishListPageReducer from "./dishListPageReducer";
import emailVerificationReducer from "./emailVerificationReducer";
import globalPreferenceFilterReducer from "./globalPreferenceFilterReducer";



export default combineReducers({
 
  general: generalReducer,
  googledata:googleReducer,
  alert:alertReducer,
  allergy:allergyReducer,
  restaurantAdmin:restaurantAdminReducer,
  userProfile:userProfileReducer,
  dishes:dishReducer,
  homePage:homePageReducer,
  restaurantSearch:restaurantSearchPageReducer,
  restaurantMenuTab:restaurantMenuTabReducer,
  restaurantList:restaurantListPageReducer,
  dishList:dishListPageReducer,
  emailVerification:emailVerificationReducer,
  myPreference:globalPreferenceFilterReducer
});
