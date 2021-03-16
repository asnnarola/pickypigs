

const initialState = {
    isLoading : false,
    errorMessage:'',
    selectedPreference:{
      allergendata:[],
      dietarydata:[],
      lifestyledata:[],
      featuredata:[],
    },
    };
    
    const globalPreferenceFilterReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        case "UPDATE_PREFERENCEFILTER_FORM":
            return  {
                ...state,
                isLoading: false,
                selectedPreference : {
                    ...state.selectedPreference,
                    [payload.key] : payload.value
                }
            };

       
        default:
          return state;
      }
    };
    
    export default globalPreferenceFilterReducer;
    