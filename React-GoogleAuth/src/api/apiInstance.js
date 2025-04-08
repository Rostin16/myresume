import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://project-13-auth-default-rtdb.firebaseio.com/products",
});

export default apiInstance;
