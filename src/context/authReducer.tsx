import { Usuario } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'ckecking' | 'authenticate' | 'not-authenticate';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction =
    | { type: 'signIn', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logOut' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticate',
                token: null,
                errorMessage: action.payload
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }

        case 'signIn':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticate',
                token: action.payload.token,
                user: action.payload.user
            }

        case 'logOut':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticate',
                token: null,
                user: null
            }

        default:
            return state;
    }
}