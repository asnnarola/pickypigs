import axios from "axios";
// alert("sss")
const mytoken = localStorage.getItem("access_token");

if (window.location.host === "localhost:3000") {
  //  axios.defaults.baseURL = "https://pickypigsapi.herokuapp.com";
   axios.defaults.baseURL = "http://apps.narola.online:5003";

  // axios.defaults.baseURL = "http://192.168.100.39:8000";
  // axios.defaults.baseURL = "http://localhost:8000";
} else {
  // axios.defaults.baseURL = "https://pickypigsapi.herokuapp.com";
  // axios.defaults.baseURL = "http://192.168.100.39:8000";}
  axios.defaults.baseURL = "http://apps.narola.online:5003";

}
if (mytoken&&mytoken) axios.defaults.headers.common = { "x-access-token": mytoken };


export default axios;
