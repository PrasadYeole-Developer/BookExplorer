import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org/",
  timeout: 5000,
});

export default axiosInstance;
