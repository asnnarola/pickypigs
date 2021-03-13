

const initialState = {
    isLoading : false,
    errorMessage:'',
    selectedPreference:{},
    };
    
    const globalPreferenceFilterReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        case "UPDATE_MENU_FORM":
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
    