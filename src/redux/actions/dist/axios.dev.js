"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// alert("sss")
var mytoken = localStorage.getItem("access_token");

if (window.location.host === "localhost:3000") {
  //  axios.defaults.baseURL = "https://pickypigsapi.herokuapp.com";
  _axios["default"].defaults.baseURL = "http://apps.narola.online:5003"; // axios.defaults.baseURL = "http://192.168.100.39:5003";
  // axios.defaults.baseURL = "http://localhost:5003";
} else {
  // axios.defaults.baseURL = "https://pickypigsapi.herokuapp.com";
  // axios.defaults.baseURL = "http://192.168.100.39:5003";
  _axios["default"].defaults.baseURL = "http://apps.narola.online:5003";
}

if (mytoken && mytoken) _axios["default"].defaults.headers.common = {
  "x-access-token": mytoken
};
var _default = _axios["default"];
exports["default"] = _default;