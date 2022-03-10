import axios from "axios";

//export const baseURL = "https://5db4-188-70-29-67.ngrok.io/";
export const baseURL = "http://192.168.1.148:8080/";
// export const baseURL = "http://192.168.100.22:8080/";

export const instance = axios.create({
  baseURL: `${baseURL}api`,
  //baseURL: "http://192.168.100.22:8000/api",
});
