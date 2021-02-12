import Axios from './axios';
import {setAlert} from './alertAction';
import {RESTAURANT_ADMIN_URL} from '../../shared/constant';


// register a user
export const registerRestaurant = (user) => {
    return async (dispatch) => {
        try {
            dispatch({type : "REGISTER_RESTAURANT_REQUEST"});
            let config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            let dataURL=`/auth/restaurant_signup`
            let response = await Axios.post(dataURL, JSON.stringify(user) , config);
            dispatch({type : "REGISTER_RESTAURANT_SUCCESS" , payload : response.data});
            dispatch(setAlert('Restaurant Registration Successful', 'success'));
            dispatch(showAdminSignUpPopup(false));
        }
        catch (error) {
            dispatch({type : "REGISTER_RESTAURANT_FAILURE", payload: error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something went wrong!', 'error'));
            }
  
        }
    }
  };


export const getAdminLogin=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_ADMINLOGIN_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/auth/login`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_ADMINLOGIN_SUCCESS",payload:response.data});
            dispatch(setAlert('Admin LogIn Success', 'success'));
            if(response){
                window.location=`${RESTAURANT_ADMIN_URL}/login/${response.data.token}`;
            }
            // const token = localStorage.getItem("access_token");
            // if (token) axios.defaults.headers.common = { "x-access-token": token };
        }
        catch(error){
          dispatch({type:"GET_ADMINLOGIN_FAILURE",payload:error});
          dispatch(setAlert('Wrong Credential', 'error'));
        }
    }
  };
  


  export const showAdminSignUpPopup = (data) => (dispatch) => {
    dispatch({
      type: "SHOW_ADMINSIGNUP_POPUP",
      payload: data,
    });
  }