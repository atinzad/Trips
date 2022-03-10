import axios from "axios";

//export const baseURL = "https://1ad7-188-71-241-23.ngrok.io/";
//export const baseURL = "http://192.168.100.168:8080/";
export const baseURL = "http://192.168.100.22:8080/";
//export const baseURL = "http://192.168.1.148:8080/";
//export const baseURL = "http://192.168.100.168:8080/";
// export const baseURL = "http://192.168.100.22:8080/";

export const instance = axios.create({
  baseURL: `${baseURL}api`,
  //baseURL: "http://192.168.100.22:8000/api",
});
