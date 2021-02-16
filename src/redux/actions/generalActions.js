import axios from 'axios';
import Axios from './axios';
import {setAlert} from './alertAction';
import { API_KEY,GOOGLE_PLACE_API_URL,EDAMAM_APP_ID,EDAMAM_APP_KEY} from '../../shared/constant';



// register a user
export const registerUser = (user,history) => {
  return async (dispatch) => {
      try {
          dispatch({type : "REGISTER_USER_REQUEST"});
          dispatch(registrationSuccess(false));
          let config = {
              headers : {
                  'Content-Type' : 'application/json'
              }
          };
          let dataURL=`/auth/user_signup`
          let response = await Axios.post(dataURL, JSON.stringify(user) , config);
          dispatch({type : "REGISTER_USER_SUCCESS" , payload : response.data});
          history.push('/');
          // dispatch(setAlert('Registration Successful.Please Verify Mail', 'success'));
          dispatch(showSignUpPopup(false));
          dispatch(registrationSuccess(true));

      }
      catch (error) {
          dispatch({type : "REGISTER_USER_FAILURE", payload: error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something went wrong!', 'error'));
          }
          dispatch(registrationSuccess(false));

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
          dispatch(showSignInPopup(false));
          dispatch(setAlert('LogIn Success', 'success'));
          const token = localStorage.getItem("access_token");
          if (token) axios.defaults.headers.common = { "x-access-token": token };
         
      }
      catch(error){
        dispatch({type:"GET_LOGIN_FAILURE",payload:error});
        if (error.response) {
          dispatch(setAlert('Wrong Credential', 'error'));
        } else {
          dispatch(setAlert('Something went wrong!', 'error'));
        }
      }
  }
};

export const googleLogin=(data,history,show,page)=>{
  console.log(show,page)
  return async(dispatch)=>{
      try{
          dispatch({type:"GOOGLE_LOGIN_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json",
               }
           }
          let dataURL=`/auth/google`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GOOGLE_LOGIN_SUCCESS",payload:response.data});
          if(page==="signIn"){
             dispatch(showSignInPopup(show));
             dispatch(showSignInPopup(!show));
          }else{
            dispatch(showSignUpPopup(show));
            dispatch(showSignUpPopup(!show));
          }
          dispatch(setAlert('LogIn Success', 'success'));
          const token = localStorage.getItem("access_token");
          if (token) axios.defaults.headers.common = { "x-access-token": token };
          history.push('/');
         
      }
      catch(error){
        dispatch({type:"GOOGLE_LOGIN_FAILURE",payload:error});
        if (error.response) {
          dispatch(setAlert('Wrong Credential', 'error'));
        } else {
          dispatch(setAlert('Something went wrong!', 'error'));
        }
      }
  }
};


export const facebookLogin=(data,history,show,page)=>{
  console.log(show,page)
  return async(dispatch)=>{
      try{
          dispatch({type:"FACEBOOK_LOGIN_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json",
               }
           }
          let dataURL=`/auth/facebook`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"FACEBOOK_LOGIN_SUCCESS",payload:response.data});
          history.push('/');
          if(page==="signIn"){
             dispatch(showSignInPopup(show));
             dispatch(showSignInPopup(!show));
          }else{
            dispatch(showSignUpPopup(show));
            dispatch(showSignUpPopup(!show));
          }
          dispatch(setAlert('LogIn Success', 'success'));
          const token = localStorage.getItem("access_token");
          if (token) axios.defaults.headers.common = { "x-access-token": token };
         
      }
      catch(error){
        dispatch({type:"FACEBOOK_LOGIN_FAILURE",payload:error});
        if (error.response) {
          dispatch(setAlert('Wrong Credential', 'error'));
        } else {
          dispatch(setAlert('Something went wrong!', 'error'));
        }
      }
  }
};




export const logoutUser=(history)=>{
  return async(dispatch)=>{
      try{
          await dispatch({type:"LOGOUT_USER_REQUEST"});
          dispatch(setAlert('LogOut Success', 'success'));
          history.push('/') ;
          axios.defaults.headers.common = { "x-access-token": "" };
      }
      catch(error){
          console.error(error);
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something went wrong!', 'error'));
          }
      }
  }
}



export const forgotPassword=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"FORGOT_PASSWORD_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`/auth/forgot_password`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"FORGOT_PASSWORD_SUCCESS",payload:response.data});
          if (response.data.message==="Reset link was sent to your email address") {
            dispatch(setAlert(`${response.data.message}`, 'success'));
          } else {
          dispatch(setAlert(`${response.data.message}`, 'error'));
          }
      }
      catch(error){
        dispatch({type:"FORGOT_PASSWORD_FAILURE",payload:error});
        if (error.response) {
          dispatch(setAlert('Wrong Credential', 'error'));
        } else {
          dispatch(setAlert('Something went wrong!', 'error'));
        }
      }
  }
};


export const resetPassword=(data,history)=>{
  console.log(data);
  return async(dispatch)=>{
      try{
          dispatch({type:"RESET_PASSWORD_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`/auth/reset_password`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"RESET_PASSWORD_SUCCESS",payload:response.data});
          dispatch(setAlert(`${response.data.message}`, 'success'));
          history.push('/');
      }
      catch(error){
        dispatch({type:"RESET_PASSWORD_FAILURE",payload:error});
        if (error.response) {
          dispatch(setAlert(`${error.response.data.message}`, 'error'));
        } else {
          dispatch(setAlert('Something went wrong!', 'error'));
        }
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
               }
           }
          let dataURL=`/frontend/homePage/join_us`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"SEND_JOINUS_SUCCESS",payload:response.data});
          dispatch(setAlert('Message Send Successfuly', 'success'));
         
      }
      catch(error){
        dispatch({type:"SEND_JOINUS_FAILURE",payload:error});
        if (error.response) {
          dispatch(setAlert(`${error.response.data.message}`, 'error'));
        } else {
          dispatch(setAlert('Something went wrong!', 'error'));
        }
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

export const registrationSuccess = (data) => (dispatch) => {
  dispatch({
    type: "SHOW_SIGNUPSUCCESS_POPUP",
    payload: data,
  });
};;