import { privateAuthApiService, publicAuthApiService, refreshAuthApiService } from "@/api";
import { AuthCredentials, AuthTokens } from "@/models/auth";


export const getCredentialsFromServer = (credentials: AuthCredentials) => {
    const controller = new AbortController();
    const request = publicAuthApiService.post<AuthTokens>("/local/login", credentials, { signal: controller.signal });
    return { controller, request }
}

export const getCredentialsFromRefresh = () => {
    const controller = new AbortController();
    const request = refreshAuthApiService.post<AuthTokens>("/refresh", null, { signal: controller.signal });
    return { controller, request }
}

export const logoutFromServer = () => {
    const controller = new AbortController();
    const request = privateAuthApiService.post<void>("/auth/logout", null, {signal: controller.signal});

    return { controller, request }
}