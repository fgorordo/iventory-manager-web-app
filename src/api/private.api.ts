import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

export const privateAuthApiService = axios.create({
    baseURL: BASE_URL
});