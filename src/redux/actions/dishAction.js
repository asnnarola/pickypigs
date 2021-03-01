import Axios from './axios';
import {setAlert} from './alertAction';


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
              dispatch(setAlert('Something wwnt wrong!', 'error'));
            }
        }
    }
  };