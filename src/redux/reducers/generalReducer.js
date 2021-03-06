

const initialState = {
  isLoading : false,
  errorMessage:'',
  login_Data:{},
  joinus_massage:null,
  restaurant_Search_Data:[],
  isSignedIn : false,
  isSignedUp : false,
  showSignUpPopup: false,
  showSignInPopup: false,
  showSignUpSuccessPopup: false,
  showVerificationPopup:false,
  forgot_Password:{},
  reset_Password:{},
  isRegisterSuccess : false,

  };
  
  const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "GET_RESTAURANT_SEARCH_DATA":
        return {
          ...state,
          restaurant_Search_Data:payload.results,
        };
      case "SHOW_SIGNUP_POPUP":
        return {
          ...state,
          showSignUpPopup: payload,
        };
      case "SHOW_LOGIN_POPUP":
        return {
          ...state,
          showSignInPopup: payload,
        };  
      case "SHOW_SIGNUPSUCCESS_POPUP":
        return {
          ...state,
          showSignUpSuccessPopup: payload,
        };   

      case "SHOW_VERIFICATION_POPUP":
        return {
          ...state,
          showVerificationPopup: payload,
        };    

      case "GET_NUTRITION_DATA_REQUEST":
      case "SEND_JOINUS_REQUEST":
      case "GET_LOGIN_REQUEST":
      case "REGISTER_USER_REQUEST":
      case "GOOGLE_LOGIN_REQUEST":
      case "FACEBOOK_LOGIN_REQUEST":
        return {
          ...state,
          isLoading :true,
          isSignedIn : false,
          isSignedUp : false,
          isRegisterSuccess : false,
        };

      case "GET_LOGIN_SUCCESS":
        localStorage.setItem('access_token',payload.token);
        localStorage.setItem('isEmailVerified',payload.emailVerified);
        localStorage.setItem('email',payload.email);
        localStorage.setItem('role','user');
        return {
          ...state,
          isLoading:false,
          login_Data:payload,
          isSignedIn:true,
        }; 

      case "GOOGLE_LOGIN_SUCCESS":
        localStorage.setItem('access_token',payload.token);
        localStorage.setItem('isEmailVerified','true');
        localStorage.setItem('email',payload.email);
        localStorage.setItem('role','user');
        return {
          ...state,
          isLoading:false,
        };  

      case "FACEBOOK_LOGIN_SUCCESS":
        localStorage.setItem('access_token',payload.token);
        localStorage.setItem('isEmailVerified','true');
        localStorage.setItem('email',payload.email);
        localStorage.setItem('role','user');
        return {
          ...state,
          isLoading:false,
        };     
        
      //logout user
      case "LOGOUT_USER_REQUEST":
        localStorage.removeItem('access_token');
        localStorage.removeItem('isEmailVerified');
        localStorage.removeItem('email');
        localStorage.removeItem('role');
         return{
            ...state,
            isLoading:false,
         }   

      case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isSignedUp : false,
                isRegisterSuccess : true,

            };  

      case "GET_NUTRITION_DATA_SUCCESS":
        return {
          ...state,
          isLoading:false,
          nutrition_Data:payload,
        }; 
        
      case "SEND_JOINUS_SUCCESS":
        return {
          ...state,
          isLoading:false,
          joinus_massage:payload,
        };  

      case "GET_NUTRITION_DATA_FAILURE":
      case "SEND_JOINUS_FAILURE":
      case "GET_LOGIN_FAILURE":
      case "REGISTER_USER_FAILURE":
      case "GOOGLE_LOGIN_FAILURE":
      case "FACEBOOK_LOGIN_FAILURE":
        return {
          ...state,
          isLoading:false,
          errorMessage:payload,
          isSignedIn : false,
          isSignedUp : false,
          isRegisterSuccess : false,
        };

        //FORGOT_PASSWORD
      case "FORGOT_PASSWORD_REQUEST":    
        return {
          ...state,
          isLoading :true,
        };

      case "FORGOT_PASSWORD_SUCCESS":
        return {
          ...state,
          isLoading:false,
          forgot_Password:payload,
        };    

      case "FORGOT_PASSWORD_FAILURE":
        return {
          ...state,
          isLoading:false,
          forgot_Password:{},
          errorMessage:payload
        }; 
        //RESET_PASSWORD
      case "RESET_PASSWORD_REQUEST":    
          return {
            ...state,
            isLoading :true,
          };

      case "RESET_PASSWORD_SUCCESS":
        return {
          ...state,
          isLoading:false,
          reset_Password:payload,
        };    

      case "RESET_PASSWORD_FAILURE":
        return {
          ...state,
          isLoading:false,
          reset_Password:{},
          errorMessage:payload
        }; 

      default:
        return state;
    }
  };
  
  export default generalReducer;
  