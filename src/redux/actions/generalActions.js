import axios from 'axios';
import { API_KEY,GOOGLE_PLACE_API_URL} from '../../shared/constant';



export const getRestaurantSearchData = (latitude,longitude,userSearchText) => async (dispatch) => {
    // console.log("Data: ", latitude,longitude,userSearchText);
    const res = await axios.get(`${GOOGLE_PLACE_API_URL}?location=${latitude},${longitude}&sensor=true&query=${userSearchText}&key=${API_KEY}`);

    dispatch({
      type: "GET_RESTAURANT_SEARCH_DATA",
      payload: res.data,
    });
  };

