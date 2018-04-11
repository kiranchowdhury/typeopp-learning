export interface AuthState {
    email: string,
    token?: string,
    role?: string,
    loggedIn: boolean;
    loading: boolean;
    loadingMsg: string;
    errorMessage?: string;
}
