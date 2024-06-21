export const getRefreshTokenFromLocalStorage = () => {
    return localStorage.getItem('auth_refresh_token')
};

export const setRefreshTokenInLocalStorage = (refreshToken: string) => {
    return localStorage.setItem('auth_refresh_token', refreshToken)
};

export const clearRefreshTokenAtLocalStorage = () => {
    return localStorage.removeItem('auth_refresh_token');
}