import Axios from './axios';
import {setAlert} from './alertAction';

export const getFavouriteDishListData=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_FAVOURITEDISHLISTDATA_REQUEST"});
          let config= {
            headers:{
             "Content-Type":"application/json"
             }
          }
          let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_FAVOURITEDISHLISTDATA_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_FAVOURITEDISHLISTDATA_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};



export const getWhatsNewDishList=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_WHATSNEWDISHLIST_REQUEST"});
          let config= {
            headers:{
             "Content-Type":"application/json"
             }
          }
          let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_WHATSNEWDISHLIST_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_WHATSNEWDISHLIST_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};

export const getBreakfastMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_BREAKFASTMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_BREAKFASTMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_BREAKFASTMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
  };

export const getLunchMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_LUNCHTMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_LUNCHTMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_LUNCHTMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};  

export const getDinnerMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_DINNERMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_DINNERMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_DINNERMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};

export const getDessertMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_DESSERTMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_DESSERTMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_DESSERTMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};

export const getBuffetMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_BUFFETMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_BUFFETMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_BUFFETMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};


export const getDrinksMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_DRINKSMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_DRINKSMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_DRINKSMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};


export const getNibbleMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_NIBBLEMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_NIBBLEMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_NIBBLEMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};

export const getSetmenuMenuDishList=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SETMENUMENUDISHLIST_REQUEST"});
            let config= {
              headers:{
               "Content-Type":"application/json"
               }
            }
            let dataURL=`/frontend/restaurant_search_page/page_1_dishes`
            let response = await Axios.post(dataURL,JSON.stringify(data),config );
            dispatch({type:"GET_SETMENUMENUDISHLIST_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_SETMENUMENUDISHLIST_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};
