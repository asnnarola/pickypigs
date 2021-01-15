import axios from "axios";



if (window.location.host === "localhost:3000") {
  //  axios.defaults.baseURL = "https://pickypigsapi.herokuapp.com";
  axios.defaults.baseURL = "http://192.168.100.39:8000";
  // axios.defaults.baseURL = "http://localhost:8000";
} else {
  axios.defaults.baseURL = "https://pickypigsapi.herokuapp.com";
  // axios.defaults.baseURL = "http://192.168.100.39:8000";}
}


export default axios;
