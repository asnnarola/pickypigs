

const initialState = {
    isLoading : false,
    errorMessage:'',
    subscribedRestaurantDetail_Data:null,
    topPicksRestaurant_List:null,
    whatsNewRestaurant_List:null,
    };
    
    const restaurantListPageReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        //getSelectedRestaurantDetailInfoData
        case "GET_SUBSCRIBEDRESTAURANTDATA_REQUEST":
        case "GET_TOPPICKSRESTAURANTLIST_REQUEST":
        case "GET_WHATSNEWRESTAURANTLIST_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
              
        case "GET_SUBSCRIBEDRESTAURANTDATA_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                subscribedRestaurantDetail_Data: payload
            }  
        case "GET_TOPPICKSRESTAURANTLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                topPicksRestaurant_List: payload
            } 
        case "GET_WHATSNEWRESTAURANTLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                whatsNewRestaurant_List: payload
            }         
        case "GET_SUBSCRIBEDRESTAURANTDATA_FAILURE":  
        case "GET_TOPPICKSRESTAURANTLIST_FAILURE":  
        case "GET_WHATSNEWRESTAURANTLIST_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

       
        
      
        default:
          return state;
      }
    };
    
    export default restaurantListPageReducer;
    