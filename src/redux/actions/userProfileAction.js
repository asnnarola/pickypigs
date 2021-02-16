import Axios from './axios';
import {setAlert} from './alertAction';


export const getUserProfileDetail=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"GET_USERPROFILE_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json",
                 }
             }
            let dataURL=`/frontend/profile`
            let response = await Axios.get(dataURL,config);
            dispatch({type:"GET_USERPROFILE_SUCCESS",payload:response.data});
        }
        catch(error){
        dispatch({type:"GET_USERPROFILE_FAILURE",payload:error});
        if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
        } else {
            dispatch(setAlert('Something went wrong!', 'error'));
        }
        }
    }
};


export const updateUserProfileDetail=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:"UPDATE_USERPROFILE_REQUEST"});
            let config= {
                headers:{
                 "Content-Type":"application/json"
                 }
             }
            let dataURL=`/frontend/profile/`
            let response = await Axios.put(dataURL,JSON.stringify(data),config );
            dispatch({type:"UPDATE_USERPROFILE_SUCCESS",payload:response.data});
            dispatch(getUserProfileDetail());
            dispatch(setAlert('Profile Updated Successfuly', 'success'));
        }
        catch(error){
          dispatch({type:"UPDATE_USERPROFILE_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };

  export const updateUserProfileImage=(image)=>{
      console.log(image)
    return async(dispatch)=>{
        try{
            dispatch({type:"UPDATE_USERIMAGE_REQUEST"});
            let config= {
                headers:{
                  "Content-Type": "multipart/form-data",
                 }
             }
             const formData = new FormData();
             const file = image;
             formData.append("image", file);

            let dataURL=`/frontend/profile/upload_profile_image`
            let response = await Axios.put(dataURL,formData,config );
            dispatch({type:"UPDATE_USERIMAGE_SUCCESS",payload:response.data});
            dispatch(getUserProfileDetail());
            dispatch(setAlert('Profile Image Updated Successfuly', 'success'));
        }
        catch(error){
          dispatch({type:"UPDATE_USERIMAGE_FAILURE",payload:error});
          if (error.response) {
            dispatch(setAlert(`${error.response.data.message}`, 'error'));
          } else {
            dispatch(setAlert('Something wwnt wrong!', 'error'));
          }
        }
    }
  };