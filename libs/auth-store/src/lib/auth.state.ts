export interface AuthState {
    authenticated: boolean;
    name: string;
}

export const initialUserState: AuthState = {
    authenticated: false,
    name: ''
};
