import Axios from './axios';
import {setAlert} from './alertAction';


    export const getAllAllergyData=()=>{
        return async(dispatch)=>{
            try{
                dispatch({type:"GET_ALLERGY_REQUEST"});
                let dataURL=`/list/allergen`
                let response = await Axios.get(dataURL);
                dispatch({type:"GET_ALLERGY_SUCCESS",payload:response.data});
            }
            catch(error){
            dispatch({type:"GET_ALLERGY_FAILURE",payload:error});
            if (error.response) {
                dispatch(setAlert(`${error.response.data.message}`, 'danger'));
            } else {
                dispatch(setAlert('Something went wrong!', 'danger'));
            }
            }
        }
    };

    export const getAllDietaryData=()=>{
        return async(dispatch)=>{
            try{
                dispatch({type:"GET_DIETARY_REQUEST"});
                let dataURL=`/list/dietary`
                let response = await Axios.get(dataURL);
                dispatch({type:"GET_DIETARY_SUCCESS",payload:response.data});
            }
            catch(error){
            dispatch({type:"GET_DIETARY_FAILURE",payload:error});
            if (error.response) {
                dispatch(setAlert(`${error.response.data.message}`, 'danger'));
            } else {
                dispatch(setAlert('Something went wrong!', 'danger'));
            }
            }
        }
    };

    export const getAllLifestyleData=()=>{
        return async(dispatch)=>{
            try{
                dispatch({type:"GET_LIFESTYLE_REQUEST"});
                let dataURL=`/list/lifestyle`
                let response = await Axios.get(dataURL);
                dispatch({type:"GET_LIFESTYLE_SUCCESS",payload:response.data});
            }
            catch(error){
            dispatch({type:"GET_LIFESTYLE_FAILURE",payload:error});
            if (error.response) {
                dispatch(setAlert(`${error.response.data.message}`, 'danger'));
            } else {
                dispatch(setAlert('Something went wrong!', 'danger'));
            }
            }
        }
    };

    export const getAllRestaurantFeaturesData=()=>{
        return async(dispatch)=>{
            try{
                dispatch({type:"GET_RESTAURANTFEATURE_REQUEST"});
                let dataURL=`/list/restaurant_features_option`
                let response = await Axios.get(dataURL);
                dispatch({type:"GET_RESTAURANTFEATURE_SUCCESS",payload:response.data});
            }
            catch(error){
            dispatch({type:"GET_RESTAURANTFEATURE_FAILURE",payload:error});
            if (error.response) {
                dispatch(setAlert(`${error.response.data.message}`, 'danger'));
            } else {
                dispatch(setAlert('Something went wrong!', 'danger'));
            }
            }
        }
    };




  
