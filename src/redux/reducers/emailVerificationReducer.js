

const initialState = {
    isLoading : false,
    errorMessage:'',
    emailVerification_Message:null,
    };
    
    const emailVerificationReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        //getEmailVerificationInfoData
        case "GET_EMAILVERIFICATION_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
              
        case "GET_EMAILVERIFICATION_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                emailVerification_Message: payload
            }  
      
        case "GET_EMAILVERIFICATION_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

        
      
        default:
          return state;
      }
    };
    
    export default emailVerificationReducer;
    