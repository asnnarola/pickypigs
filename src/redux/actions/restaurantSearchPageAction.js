import Axios from './axios';
import {setAlert} from './alertAction';


export const getSearchedRestaurantsList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SEARCHEDRESTAURANTLIST_REQUEST"});
            let config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            let dataURL=`/frontend/restaurant_search_page/restaurantlist`
            let response = await Axios.post(dataURL, JSON.stringify(data) , config);
            dispatch({type:"GET_SEARCHEDRESTAURANTLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_SEARCHEDRESTAURANTLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};

