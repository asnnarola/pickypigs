import Axios from './axios';
import {setAlert} from './alertAction';


export const getRestaurantMenuTabList=(selectedId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_RESTAURANTMENUTAB_REQUEST"});
            ;
            let dataURL=`/list/restaurant_menus/${selectedId}`
            let response = await Axios.get(dataURL);
            dispatch({type:"GET_RESTAURANTMENUTAB_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_RESTAURANTMENUTAB_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};


export const getmenuTabTopPickList=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_MENUTOPPICK_REQUEST"});
          let config = {
              headers : {
                  'Content-Type' : 'application/json'
              }
          };
          let dataURL=`/frontend/restaurant/restaurant_top_pick_dishes`
          let response = await Axios.post(dataURL, JSON.stringify(data) , config);
          dispatch({type:"GET_MENUTOPPICK_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_MENUTOPPICK_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};


export const getCategorySubcategoryDishesList=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_CATEGORYSUBCATEGORYDISH_REQUEST"});
          let config = {
              headers : {
                  'Content-Type' : 'application/json'
              }
          };
          let dataURL=`/frontend/restaurant/category_subcategory_dishes`
          let response = await Axios.post(dataURL, JSON.stringify(data) , config);
          dispatch({type:"GET_CATEGORYSUBCATEGORYDISH_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_CATEGORYSUBCATEGORYDISH_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};
