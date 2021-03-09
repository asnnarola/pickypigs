import Axios from './axios';
import {setAlert} from './alertAction';

export const getSubscribedRestaurantData=()=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_SUBSCRIBEDRESTAURANTDATA_REQUEST"});
          let config= {
            headers:{
             "Content-Type":"application/json"
             }
          }
          let dataURL=`/frontend/restaurant_search_page/green_slider_restaurants`
          let response = await Axios.post(dataURL,config );
          dispatch({type:"GET_SUBSCRIBEDRESTAURANTDATA_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_SUBSCRIBEDRESTAURANTDATA_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};

export const gettopPicksRestaurantList=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_TOPPICKSRESTAURANTLIST_REQUEST"});
          let config= {
            headers:{
             "Content-Type":"application/json"
             }
          }
          let dataURL=`/frontend/restaurant_search_page/page_1_restaurants`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_TOPPICKSRESTAURANTLIST_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_TOPPICKSRESTAURANTLIST_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};

export const getWhatsNewRestaurantList=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_WHATSNEWRESTAURANTLIST_REQUEST"});
          let config= {
            headers:{
             "Content-Type":"application/json"
             }
          }
          let dataURL=`/frontend/restaurant_search_page/page_1_restaurants`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_WHATSNEWRESTAURANTLIST_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_WHATSNEWRESTAURANTLIST_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};


