import axios from "axios";

const host = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("jwtToken")

export const api = axios.create({
  baseURL: host,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  
});
