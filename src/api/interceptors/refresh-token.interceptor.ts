import { AxiosError, AxiosRequestConfig } from "axios";
import { refreshAuthApiService } from "../auth.api";

export const setupRefreshTokenInterceptor = (refreshToken: string) => {
    const handleError = async (error: AxiosError) => {
        return Promise.reject(error);
    }

    refreshAuthApiService.interceptors.request.use( async (config: any | AxiosRequestConfig) => {
        config.headers["Authorization"] = "Bearer " + refreshToken
        return config;
    })

    refreshAuthApiService.interceptors.response.use((response) => response, handleError);
}