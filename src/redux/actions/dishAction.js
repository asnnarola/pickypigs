import Axios from './axios';
import {setAlert} from './alertAction';

export const getSelectedRestaurantDetailInfoData=(selectedId,data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_SELECTEDRESTAURANTDETAILINFO_REQUEST"});
          let config= {
            headers:{
             "Content-Type":"application/json"
             }
          }
          let dataURL=`/frontend/restaurant/info/${selectedId}`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_SELECTEDRESTAURANTDETAILINFO_SUCCESS",payload:response.data});
      }
    
      catch(error){
          dispatch({type:"GET_SELECTEDRESTAURANTDETAILINFO_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something Went wrong!', 'error'));
          }
      }
  }
};



export const getSelectedDiscInfoData=(selectedId)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_SELECTEDDISCINFO_REQUEST"});

            let response = await Axios.get(`/frontend/restaurant/dish_info/${selectedId}`)
            dispatch({type:"GET_SELECTEDDISCINFO_SUCCESS",payload:response.data});
        }
      
        catch(error){
            dispatch({type:"GET_SELECTEDDISCINFO_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};