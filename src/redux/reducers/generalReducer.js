

const initialState = {
  isLoading : false,
  errorMessage:'',
  login_Data:{},
  joinus_massage:null,
  restaurant_Search_Data:null,
  isSignedUp : false,
  showSignUpPopup: false,

  };
  
  const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "GET_RESTAURANT_SEARCH_DATA":
        return {
          ...state,
          restaurant_Search_Data:payload.results,
        };
      case "SHOW_LOGIN_POPUP":
        return {
          ...state,
          showSignUpPopup: payload,
        };

      case "GET_NUTRITION_DATA_REQUEST":
      case "SEND_JOINUS_REQUEST":
      case "GET_LOGIN_REQUEST":
      case "REGISTER_USER_REQUEST":
        return {
          ...state,
          isLoading :true,
        };

      case "GET_LOGIN_SUCCESS":
        localStorage.setItem('access_token',payload.token);
        return {
          ...state,
          isLoading:false,
          login_Data:payload,
        };  

      case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                isSignedUp:false,
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
          isSignedUp:true,

        };
      

      default:
        return state;
    }
  };
  
  export default generalReducer;
  