import Axios from './axios';
import {setAlert} from './alertAction';
import { showVerificationPopup } from './generalActions';


export const getEmailVerificationInfoData=(token,history)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_EMAILVERIFICATION_REQUEST"});

            let response = await Axios.get(`/auth/email_verification/${token}`)
            dispatch({type:"GET_EMAILVERIFICATION_SUCCESS",payload:response.data});
            // dispatch(setAlert(`${response.status}`, 'error'));
            if(response&&response.status==200){
                dispatch(showVerificationPopup(true));
                history.push('/');
              }
        }
      
        catch(error){
            dispatch({type:"GET_EMAILVERIFICATION_FAILURE",payload:error});
            if (error.response) {
              dispatch(setAlert(`${error.response.data.message}`, 'error'));
            } else {
              dispatch(setAlert('Something Went wrong!', 'error'));
            }
        }
    }
};