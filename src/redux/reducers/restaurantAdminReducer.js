

const initialState = {
    isLoginLoading : false,
    isSignupLoading : false,
    isForgotPasswordLoading : false,
    isResetPasswordLoading : false,
    errorMessage:'',
    login_Data:{},
    forgot_Password:{},
    reset_Password:{},
    showAdminSignUpPopup:false,
    isAdminSignedUp : false,

    };
    
    const restaurantAdminReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_ADMINLOGIN_REQUEST":
          return {
            ...state,
            isLoginLoading :true,
          };
        case "GET_ADMINLOGIN_SUCCESS":
          return {
            ...state,
            isLoginLoading:false,
            login_Data:payload,
          };   
  
        case "GET_ADMINLOGIN_FAILURE":
          return {
            ...state,
            isLoginLoading:false,
            errorMessage:payload
          };
  
         
  
        //FORGOT_PASSWORD
        case "FORGOT_ADMINPASSWORD_REQUEST":    
            return {
              ...state,
              isForgotPasswordLoading :true,
            };
  
        case "FORGOT_ADMINPASSWORD_SUCCESS":
          return {
            ...state,
            isForgotPasswordLoading:false,
            forgot_Password:payload,
          };    
  
        case "FORGOT_ADMINPASSWORD_FAILURE":
          return {
            ...state,
            isForgotPasswordLoading:false,
            forgot_Password:{},
            errorMessage:payload
          }; 
  
        //RESET_PASSWORD
        case "RESET_PASSWORD_REQUEST":    
            return {
              ...state,
              isResetPasswordLoading :true,
            };
  
        case "RESET_PASSWORD_SUCCESS":
          return {
            ...state,
            isResetPasswordLoading:false,
            reset_Password:payload,
          };    
  
        case "RESET_PASSWORD_FAILURE":
          return {
            ...state,
            isResetPasswordLoading:false,
            reset_Password:{},
            errorMessage:payload
          };    
          
          
        //REGISTER_RESTAURANT
        case "REGISTER_RESTAURANT_REQUEST":    
            return {
              ...state,
              isSignupLoading :true,
              isAdminSignedUp : false,
            };
  
        case "REGISTER_RESTAURANT_SUCCESS":
          return {
            ...state,
            isSignupLoading:false,
            isAdminSignedUp : false,
          };    
  
        case "REGISTER_RESTAURANT_FAILURE":
          return {
            ...state,
            isSignupLoading:false,
            isAdminSignedUp : false,

          };     


        case "SHOW_ADMINSIGNUP_POPUP":
        return {
          ...state,
          showAdminSignUpPopup: payload,
        }  
  
        default:
          return state;
      }
    };
    
    export default restaurantAdminReducer;
    