import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3000",
  headers: {
    withCredentials: true,
    "Content-Type": "application/json",
  },
});

export default api;
