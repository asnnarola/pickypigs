

const initialState = {
    isLoading : false,
    errorMessage:'',
    searchedRestaurantsList_Data:null,
    searchedDishList_Data:null,

    };
    
    const restaurantSearchPageReducer = (state = initialState, { type, payload }) => {
      switch (type) {
        //getSearchedRestaurantsList
        case "GET_SEARCHEDRESTAURANTLIST_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_SEARCHEDRESTAURANTLIST_SUCCESS":
            return {
                ...state,
                isLoading:false,
                searchedRestaurantsList_Data:payload,
            };
    
        case "GET_SEARCHEDRESTAURANTLIST_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

        //getSearchedDishList
        case "GET_SEARCHEDDISHLIST_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
        case "GET_SEARCHEDDISHLIST_SUCCESS":
            return {
                ...state,
                isLoading:false,
                searchedDishList_Data:payload,
            };
    
        case "GET_SEARCHEDDISHLIST_FAILURE":
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };    

        default:
          return state;
      }
    };
    
    export default restaurantSearchPageReducer;
    