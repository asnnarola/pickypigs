

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

      case "GET_NUTRITION_DATA_REQUEST":
      case "SEND_JOINUS_REQUEST":
      case "GET_LOGIN_REQUEST":
      case "REGISTER_USER_REQUEST":
        return {
          ...state,
          isLoading :true,
          isSignedIn : false,
          isSignedUp : false,
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
                loading: false,
                isSignedUp : true,

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
        return {
          ...state,
          isLoading:false,
          errorMessage:payload,
          isSignedIn : false,
          isSignedUp : false,
        };
      

      default:
        return state;
    }
  };
  
  export default generalReducer;
  