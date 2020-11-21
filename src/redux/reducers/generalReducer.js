const initialState = {
  };
  
  const generalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "GET_RESTAURANT_SEARCH_DATA":
        return {
          ...state,
          restaurant_Search_Data:payload.results,
        };
      
      default:
        return state;
    }
  };
  
  export default generalReducer;
  