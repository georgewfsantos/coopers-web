import axios from "axios";

export const api = axios.create({
  baseURL: "https://coopers-server.onrender.com",
});
