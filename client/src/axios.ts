import axios from "axios";
import { API_BASE_URL } from "./config";

console.log(localStorage.getItem("token"));

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export { axiosClient };
