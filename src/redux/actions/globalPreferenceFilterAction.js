import Axios from './axios';


// update product Form
export const updatePreferenceFilter = (key , value) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"UPDATE_PREFERENCEFILTER_FORM" , payload : { key,value} });
      }
      catch(error){
          console.error(error);
      }
  }
};