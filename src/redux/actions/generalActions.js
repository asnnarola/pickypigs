import axios from 'axios';
import Axios from './axios';
import { API_KEY,GOOGLE_PLACE_API_URL,EDAMAM_APP_ID,EDAMAM_APP_KEY} from '../../shared/constant';
const token = localStorage.getItem("access_token");
// if (token) axios.defaults.headers.common = { "x-access-token": token };



// register a user
export const registerUser = (user) => {
  return async (dispatch) => {
      try {
          dispatch({type : "REGISTER_USER_REQUEST"});
          let config = {
              headers : {
                  'Content-Type' : 'application/json'
              }
          };
          let dataURL=`/auth/user_signup`
          let response = await Axios.post(dataURL, JSON.stringify(user) , config);
          dispatch({type : "REGISTER_USER_SUCCESS" , payload : response.data});

      }
      catch (error) {
    
          dispatch({type : "REGISTER_USER_FAILURE", payload: error});

      }
  }
};


export const getLogin=(data,history)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_LOGIN_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json",
               }
           }
          let dataURL=`/auth/login`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_LOGIN_SUCCESS",payload:response.data});
          history.push('/');
          await dispatch(showSignInPopup(false));

          // await dispatch(setAlert('LogIn Success', 'success'));
         
      }
      catch(error){
        dispatch({type:"GET_LOGIN_FAILURE",payload:error});
        // await dispatch(setAlert('Wrong Credential', 'error'));
      }
  }
};




export const getRestaurantSearchData = (latitude,longitude,userSearchText) =>  {
    // console.log("Data: ", latitude,longitude,userSearchText);
    return async(dispatch)=>{
      try{
        
      let dataURL=`${GOOGLE_PLACE_API_URL}?location=${latitude},${longitude}&sensor=true&type=restaurant&keyword=${userSearchText}&key=${API_KEY}`
      let response = await axios.get(dataURL );
      dispatch({ type: "GET_RESTAURANT_SEARCH_DATA", payload: response.data,  });
        }
    catch(error){
      console.log(error);
        }
    }
  };



export const getNutritionData=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_NUTRITION_DATA_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`https://api.edamam.com/api/nutrition-details?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
          let response = await axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_NUTRITION_DATA_SUCCESS",payload:response.data});
         
      }
      catch(error){
        dispatch({type:"GET_NUTRITION_DATA_FAILURE",payload:error});
      }
  }
};


export const sendJoinUsMessage=(data)=>{

  return async(dispatch)=>{
      try{
          dispatch({type:"SEND_JOINUS_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json",
               'x-access-token': `${token&&token}`
               }
           }
          let dataURL=`/frontend/homePage/join_us`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"SEND_JOINUS_SUCCESS",payload:response.data});
         
      }
      catch(error){
        dispatch({type:"SEND_JOINUS_FAILURE",payload:error});
      }
  }
};

export const logoutUser=(history)=>{
  return async(dispatch)=>{
      try{
          await dispatch({type:"LOGOUT_USER_REQUEST"});
          // await dispatch(setAlert('LogOut Success', 'success'));
          history.push('/') ;
      }
      catch(error){
          console.error(error);
          // await dispatch(setAlert('Something Wrong', 'error'));

      }
  }
}



export const showSignUpPopup = (data) => (dispatch) => {
  dispatch({
    type: "SHOW_SIGNUP_POPUP",
    payload: data,
  });
};

export const showSignInPopup = (data) => (dispatch) => {
  dispatch({
    type: "SHOW_LOGIN_POPUP",
    payload: data,
  });
};