import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://localhost:1337"
}) 

export const ApiUrl = import.meta.env.VITE_SERVER_URL;
