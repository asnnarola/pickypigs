import Axios from './axios';
import {setAlert} from './alertAction';


export const getRandomRestaurantsList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_RANDOMRESTAURANTLIST_REQUEST"});
            let config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            let dataURL=`/frontend/homePage/homepage_restaurant`
            let response = await Axios.post(dataURL, JSON.stringify(data) , config);
            dispatch({type:"GET_RANDOMRESTAURANTLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_RANDOMRESTAURANTLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};


export const getRandomDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_RANDOMDISHLIST_REQUEST"});
            let config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            let dataURL=`/frontend/homePage/homepage_dishes`
            let response = await Axios.post(dataURL, JSON.stringify(data) , config);
            dispatch({type:"GET_RANDOMDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_RANDOMDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};





export const getSearchSuggestionList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SEARCHSUGGESTIONLIST_REQUEST"});
            let config = {
                headers : {
                    'Content-Type' : 'application/json'
                }
            };
            let dataURL=`/frontend/homePage/restaurant_dish_suggestion`
            let response = await Axios.post(dataURL, JSON.stringify(data) , config);
            dispatch({type:"GET_SEARCHSUGGESTIONLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_SEARCHSUGGESTIONLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};