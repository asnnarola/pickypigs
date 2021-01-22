

const initialState = {
    isLoading : false,
    errorMessage:'',
    location_data:{},
    };
    
    const googleReducer = (state = initialState, { type, payload }) => {

      switch (type) {
          
        case "GET_GEOMETRY_DATA":
          return {
            ...state,
            location_data:payload.result.geometry.location,
          };

        default:
          return state;
      }
    };
    
    export default googleReducer;
    