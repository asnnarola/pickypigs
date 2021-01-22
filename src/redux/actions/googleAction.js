import axios from 'axios';
import { API_KEY,GOOGLE_PLACE_API_URL,EDAMAM_APP_ID,EDAMAM_APP_KEY} from '../../shared/constant';


export const getLocationGeometryData = (placeId) =>  {
    // console.log("Data: ", latitude,longitude,userSearchText);
    return async(dispatch)=>{
      try{
        
      let dataURL=`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${API_KEY}`
      let response = await axios.get(dataURL );
      dispatch({ type: "GET_GEOMETRY_DATA", payload:response.data,  });
        }
    catch(error){
      console.log(error);
        }
    }
  };