

const initialState = {
    isLoading : false,
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
            isLoading :true,
          };
        case "GET_ADMINLOGIN_SUCCESS":
          localStorage.setItem('access_token',payload.token);
          localStorage.setItem('role','restaurant_admin');
          return {
            ...state,
            isLoading:false,
            login_Data:payload,
          };   
  
        case "GET_ADMINLOGIN_FAILURE":
          return {
            ...state,
            isLoading:false,
            errorMessage:payload
          };
  
        //logout user
        case "LOGOUT_USER_REQUEST":
          localStorage.removeItem('access_token');
          localStorage.removeItem('role');
  
           return{
              ...state,
              isLoading:false,
           } 
  
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
          
          
        //REGISTER_RESTAURANT
        case "REGISTER_RESTAURANT_REQUEST":    
            return {
              ...state,
              isLoading :true,
              isAdminSignedUp : false,
            };
  
        case "REGISTER_RESTAURANT_SUCCESS":
          return {
            ...state,
            isLoading:false,
            isAdminSignedUp : false,
          };    
  
        case "REGISTER_RESTAURANT_FAILURE":
          return {
            ...state,
            isLoading:false,
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
    