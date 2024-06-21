import { setupAuthTokenInterceptor, setupRefreshTokenInterceptor } from "@/api/interceptors";
import { clearRefreshTokenAtLocalStorage, getRefreshTokenFromLocalStorage, setRefreshTokenInLocalStorage } from "@/helpers";
import { getCredentialsFromRefresh, getCredentialsFromServer, logoutFromServer } from "@/services";
import { useAppDispatch, useAppSelector } from "@/store";
import { onLogin, onLogout } from "@/store/features";
import { useAxiosWithController } from "./useAxiosWithController";
import { AuthCredentials } from "@/models/auth";

export const useAuthStore = () => {
    const { status, tokens } = useAppSelector(state => state.auth);
    const { runAxiosRequest } = useAxiosWithController();
    const dispatch = useAppDispatch();

    const startOnLogin = async (credentials: AuthCredentials) => {

        const httpCall = getCredentialsFromServer(credentials);
        const authTokens = await runAxiosRequest(httpCall);

        if (authTokens.access_token && authTokens.refresh_token) {
            setupAuthTokenInterceptor(authTokens.access_token);
            setupRefreshTokenInterceptor(authTokens.refresh_token);
            setRefreshTokenInLocalStorage(authTokens.refresh_token);
        }
        dispatch(onLogin(authTokens));
        return;
    };

    const startOnChecking = async () => {
        const refreshToken = getRefreshTokenFromLocalStorage();
        if (!refreshToken) {
            dispatch(onLogout());
            return;
        }
        setupRefreshTokenInterceptor(refreshToken);
        const httpCall = getCredentialsFromRefresh();
        const authTokens = await runAxiosRequest(httpCall);

        if (authTokens.access_token && authTokens.refresh_token) {
            setupAuthTokenInterceptor(authTokens.access_token);
            setupRefreshTokenInterceptor(authTokens.refresh_token);
            setRefreshTokenInLocalStorage(authTokens.refresh_token);
        }
        dispatch(onLogin(authTokens));
        return;

    }

    const startOnLogout = async () => {
        const httpCall = logoutFromServer();
        clearRefreshTokenAtLocalStorage()
        await runAxiosRequest(httpCall);
        dispatch(onLogout())
        return;
    }


    return {
        //* Properties
        status,
        tokens,

        //* Methods
        startOnLogin,
        startOnChecking,
        startOnLogout,
    }
};