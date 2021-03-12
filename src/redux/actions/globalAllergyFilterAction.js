import Axios from './axios';


// update product Form
export const updateMenuForm = (key , value) => {
    
    return async(dispatch)=>{
      try{
          await dispatch({type :"UPDATE_MENU_FORM" , payload : { key,value} });
      }
      catch(error){
          console.error(error);
      }
  }
};