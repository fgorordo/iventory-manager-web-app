import { AxiosError, AxiosRequestConfig } from "axios"
import { privateAuthApiService } from "../private.api";

export const setupAuthTokenInterceptor = (authToken: string) => {
    const handleError = async (error: AxiosError) => {
        return Promise.reject(error);
    }

    privateAuthApiService.interceptors.request.use( async (config: any | AxiosRequestConfig) => {
        config.headers["Authorization"] = "Bearer " + authToken
        return config;
    })

    privateAuthApiService.interceptors.response.use((response) => response, handleError);
}