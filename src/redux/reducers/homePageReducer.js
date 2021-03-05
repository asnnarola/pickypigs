

const initialState = {
    isLoading : false,
    isSearchLoading : false,
    errorMessage:'',
    randomRestaurantsList_Data:null,
    randomDishsList_Data:null,
    searchSuggestion_Data:null
    };
    
    const homePageReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        
        case "GET_RANDOMRESTAURANTLIST_REQUEST":
        case "GET_RANDOMDISHLIST_REQUEST":
            return {
                ...state,
                isLoading :true,
                isSearchLoading:true,
            };
        case "GET_RANDOMRESTAURANTLIST_SUCCESS":
            return {
                ...state,
                isLoading:false,
                randomRestaurantsList_Data:payload,
            };

        case "GET_RANDOMDISHLIST_SUCCESS":
            return {
                ...state,
                isLoading:false,
                randomDishsList_Data:payload,
            }; 

        case "GET_RANDOMRESTAURANTLIST_FAILURE":
        case "GET_RANDOMDISHLIST_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

        //search Suggestion Start
        case "GET_SEARCHSUGGESTIONLIST_REQUEST":
            return {
                ...state,
                isSearchLoading:true,
            };    
        case "GET_SEARCHSUGGESTIONLIST_SUCCESS":
            return {
                ...state,
                isSearchLoading:false,
                searchSuggestion_Data:payload,
            }; 
        case "GET_SEARCHSUGGESTIONLIST_FAILURE":
            return {
                ...state,
                isSearchLoading:false,
                errorMessage:payload
            };    
        //search Suggestion Ends
    
        default:
          return state;
      }
    };
    
    export default homePageReducer;
    