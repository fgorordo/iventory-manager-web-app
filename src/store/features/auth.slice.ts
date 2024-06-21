import { AuthState, AuthStatus, AuthTokens } from '@/models/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AuthState = {
    status: AuthStatus.CHECKING,
    tokens: {
        access_token: null,
        refresh_token: null,
    }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin(state, { payload }: PayloadAction<AuthTokens>) {
        state.status = AuthStatus.AUTHENTICATED;
        state.tokens.access_token = payload.access_token
        state.tokens.refresh_token = payload.refresh_token
    },
    onLogout(state) {
        state.status = AuthStatus.NOT_AUTHENTICATED;
        state.tokens.access_token = null;
        state.tokens.refresh_token = null;
    },
  }
});

export const { onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;