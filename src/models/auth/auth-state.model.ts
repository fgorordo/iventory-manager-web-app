import { AuthStatus } from "./auth-status.model";
import { AuthTokens } from "./auth-tokens.model";

export interface AuthState {
    status: AuthStatus
    tokens: AuthTokens,
}