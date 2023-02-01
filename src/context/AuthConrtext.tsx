import { createContext, useReducer } from 'react';
import cafeAPI from '../api/cafeAPI';
import { LoginData, LoginResponse, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: ({ correo, password }: LoginData) => any;
    logOut: () => void;
    removeError: () => void;
};

const authInitialState: AuthState = {
    status: 'ckecking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const signUp = () => {

    };
    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const response = await cafeAPI.post<LoginResponse>('auth/login', {
                correo,
                password
            });

            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    };
    const logOut = () => {

    };
    const removeError = () => {

    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}