import axios from "axios";
import { getToken } from "../utills/local-storage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

/*
    Interceptor for getToken every reqest
*/
axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; //* final config object
  },
  (error) => Promise.reject(error) //! *** starsß
);

export default axios;
