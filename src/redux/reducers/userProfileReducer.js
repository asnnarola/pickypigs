

const initialState = {
    isLoading : false,
    errorMessage:'',
    userProfile_Data:{},
    };
    
    const userProfileReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_USERPROFILE_REQUEST":
        case "UPDATE_USERPROFILE_REQUEST":
        case "UPDATE_USERIMAGE_REQUEST":
        case "GET_RESTAURANTFEATURE_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_USERPROFILE_SUCCESS":
            return {
                ...state,
                isLoading:false,
                userProfile_Data:payload.userDetail[0],
            };
            
        case "UPDATE_USERPROFILE_SUCCESS":
            return{
                ...state,
                isLoading:false,
            };

        case "UPDATE_USERIMAGE_SUCCESS":            
            return{
                ...state,
                isLoading:false,
            }  
      
        case "GET_RESTAURANTFEATURE_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                restaurantFeatures_Data:payload,
            }   
             
        case "GET_USERPROFILE_FAILURE":
        case "UPDATE_USERPROFILE_FAILURE":
        case "UPDATE_USERIMAGE_FAILURE":  
        case "GET_RESTAURANTFEATURE_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
  
    

        default:
          return state;
      }
    };
    
    export default userProfileReducer;
    