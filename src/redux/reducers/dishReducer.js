

const initialState = {
    isResturantLoading : false,
    isDishLoading : false,
    errorMessage:'',
    selectedDiscInfo_Data:null,
    selectedRestaurantDetail_Data:null,
    };
    
    const dishReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        //getSelectedRestaurantDetailInfoData
        case "GET_SELECTEDRESTAURANTDETAILINFO_REQUEST":
            return {
                ...state,
                isResturantLoading :true,
            };
              
        case "GET_SELECTEDRESTAURANTDETAILINFO_SUCCESS":            
            return{
                ...state,
                isResturantLoading:false,
                selectedRestaurantDetail_Data: payload.restaurantDetail[0]
            }  
      
        case "GET_SELECTEDRESTAURANTDETAILINFO_FAILURE":  
            return {
                ...state,
                isResturantLoading:false,
                errorMessage:payload
            };

        //getSelectedDiscInfoData
        case "GET_SELECTEDDISCINFO_REQUEST":
            return {
                ...state,
                isDishLoading :true,
            };
              
        case "GET_SELECTEDDISCINFO_SUCCESS":            
            return{
                ...state,
                isDishLoading:false,
                selectedDiscInfo_Data: payload.dishDetails[0]
            }  
      
        case "GET_SELECTEDDISCINFO_FAILURE":  
            return {
                ...state,
                isDishLoading:false,
                errorMessage:payload
            };

        
      
        default:
          return state;
      }
    };
    
    export default dishReducer;
    