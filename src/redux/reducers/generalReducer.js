

const initialState = {
  isLoading : false,
  errorMessage:'',
  };
  
  const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "GET_RESTAURANT_SEARCH_DATA":
        return {
          ...state,
          restaurant_Search_Data:payload.results,
        };


      case "GET_NUTRITION_DATA_REQUEST":
        return {
          ...state,
          isLoading :true,
        };
      case "GET_NUTRITION_DATA_SUCCESS":
        return {
          ...state,
          isLoading:false,
          nutrition_Data:payload,
        };   
      case "GET_NUTRITION_DATA_FAILURE":
        return {
          ...state,
          isLoading:false,
          errorMessage:payload
        };
      

      default:
        return state;
    }
  };
  
  export default generalReducer;
  