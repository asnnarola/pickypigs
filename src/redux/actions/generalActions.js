import Axios from 'axios';
import { API_KEY,GOOGLE_PLACE_API_URL,EDAMAM_APP_ID,EDAMAM_APP_KEY} from '../../shared/constant';



export const getRestaurantSearchData = (latitude,longitude,userSearchText) => async (dispatch) => {
    // console.log("Data: ", latitude,longitude,userSearchText);
    const res = await Axios.get(`${GOOGLE_PLACE_API_URL}?location=${latitude},${longitude}&sensor=true&query=${userSearchText}&key=${API_KEY}`);

    dispatch({
      type: "GET_RESTAURANT_SEARCH_DATA",
      payload: res.data,
    });
  };



export const getNutritionData=(data)=>{
  return async(dispatch)=>{
      try{
          dispatch({type:"GET_NUTRITION_DATA_REQUEST"});
          let config= {
              headers:{
               "Content-Type":"application/json"
               }
           }
          let dataURL=`https://api.edamam.com/api/nutrition-details?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
          let response = await Axios.post(dataURL,JSON.stringify(data),config );
          dispatch({type:"GET_NUTRITION_DATA_SUCCESS",payload:response.data});
         
      }
      catch(error){
        dispatch({type:"GET_NUTRITION_DATA_FAILURE",payload:error});
      }
  }
};