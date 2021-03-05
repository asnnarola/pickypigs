

const initialState = {
    isLoading : false,
    errorMessage:'',
    restaurantMenuTab_Data:null,
    menuTabTopPick_Data:null,
    menuTabCategory_Data:null,
    };
    
    const restaurantMenuTabReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        //getSelectedRestaurantDetailInfoData
        case "GET_RESTAURANTMENUTAB_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
              
        case "GET_RESTAURANTMENUTAB_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                restaurantMenuTab_Data: payload.menuList
            } ; 
      
        case "GET_RESTAURANTMENUTAB_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

        //getmenuTabTopPickList
        case "GET_MENUTOPPICK_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
              
        case "GET_MENUTOPPICK_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                menuTabTopPick_Data:payload
            };  
      
        case "GET_MENUTOPPICK_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
        //getCategorySubcategoryDishesList
        case "GET_CATEGORYSUBCATEGORYDISH_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
              
        case "GET_CATEGORYSUBCATEGORYDISH_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                menuTabCategory_Data:payload.categoryDetails
            };  
      
        case "GET_CATEGORYSUBCATEGORYDISH_FAILURE":  
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };
      
        default:
          return state;
      };
    };
    
    export default restaurantMenuTabReducer;
    