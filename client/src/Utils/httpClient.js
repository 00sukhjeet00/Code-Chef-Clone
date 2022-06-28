import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token??""}`;
export const baseURL = "http://localhost:5000";
export const apiCall = async(method, endpoint, data) => {
  try {
    const response =  await axios({
      method: method,
      url: baseURL + endpoint,
      data: data,
    });
    return response;
  } catch (error) {
      return error.response;
  }
};
