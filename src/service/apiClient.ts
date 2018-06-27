import axios, { AxiosInstance } from "axios";

// todo .env
const BASE_URL = "https://jsonplaceholder.typicode.com/";
export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});
