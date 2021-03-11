

const initialState = {
    isLoading : false,
    errorMessage:'',
    favouriteDishDetail_Data:null,
    whatsNewDish_List:null,
    breakfastMenuDish_List:null,
    lunchMenuDish_List:null,
    dinnerMenuDish_List:null,
    dessertMenuDish_List:null,
    buffetMenuDish_List:null,
    drinksMenuDish_List:null,
    nibbleMenuDish_List:null,
    setmenuMenuDish_List:null,

    };
    
    const dishListPageReducer = (state = initialState, { type, payload }) => {
      switch (type) {
          
        //getSelectedRestaurantDetailInfoData
        case "GET_FAVOURITEDISHLISTDATA_REQUEST":
        case "GET_WHATSNEWDISHLIST_REQUEST":
        case "GET_BREAKFASTMENUDISHLIST_REQUEST":
        case "GET_LUNCHTMENUDISHLIST_REQUEST":
        case "GET_DINNERMENUDISHLIST_REQUEST":
        case "GET_DESSERTMENUDISHLIST_REQUEST":
        case "GET_BUFFETMENUDISHLIST_REQUEST":
        case "GET_DRINKSMENUDISHLIST_REQUEST":
        case "GET_NIBBLEMENUDISHLIST_REQUEST":
        case "GET_SETMENUMENUDISHLIST_REQUEST":
            return {
                ...state,
                isLoading :true,
            };
              
        case "GET_FAVOURITEDISHLISTDATA_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                favouriteDishDetail_Data: payload
            }  
        case "GET_WHATSNEWDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                whatsNewDish_List: payload
            } 
        case "GET_BREAKFASTMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                breakfastMenuDish_List: payload
            }   
        case "GET_LUNCHTMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                lunchMenuDish_List: payload
            }   
        case "GET_DINNERMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                dinnerMenuDish_List: payload
            } 
        case "GET_DESSERTMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                dessertMenuDish_List: payload
            }          
        case "GET_BUFFETMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                buffetMenuDish_List: payload
            }    
        case "GET_DRINKSMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                drinksMenuDish_List: payload
            }      
        case "GET_NIBBLEMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                nibbleMenuDish_List: payload
            }     
        case "GET_SETMENUMENUDISHLIST_SUCCESS":            
            return{
                ...state,
                isLoading:false,
                setmenuMenuDish_List: payload
            }              
        case "GET_FAVOURITEDISHLISTDATA_FAILURE":  
        case "GET_WHATSNEWDISHLIST_FAILURE":  
        case "GET_BREAKFASTMENUDISHLIST_FAILURE":  
        case "GET_LUNCHTMENUDISHLIST_FAILURE":  
        case "GET_DINNERMENUDISHLIST_FAILURE": 
        case "GET_DESSERTMENUDISHLIST_FAILURE":  
        case "GET_BUFFETMENUDISHLIST_FAILURE":  
        case "GET_DRINKSMENUDISHLIST_FAILURE":  
        case "GET_NIBBLEMENUDISHLIST_FAILURE":  
        case "GET_SETMENUMENUDISHLIST_FAILURE": 
            return {
                ...state,
                isLoading:false,
                errorMessage:payload
            };

       
        
      
        default:
          return state;
      }
    };
    
    export default dishListPageReducer;
    