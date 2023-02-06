import { createContext, useReducer, useEffect } from 'react';
import cafeAPI from '../api/cafeAPI';
import { LoginData, LoginResponse, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import useTokenStorage from '../hooks/useTokenStorage';

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
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);
    // const { tokenStorage, writeTokenToStorage } = useTokenStorage();
    const { readTokenFromStorage, writeTokenToStorage, clearTokenInStorage } = useTokenStorage();

    useEffect(() => {
        // const token = readTokenFromStorage();
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            if (readTokenFromStorage() === null) return dispatch({ type: 'notAuthenticated' });
            // console.log('Token in AuthContext: ', tokenStorage);
            const response = await cafeAPI.get('/auth');

            if (response.status !== 200) return dispatch({ type: 'notAuthenticated' });

            return dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.usuario
                }
            });
        } catch (error) {
            console.log('Error in checkToken', error);
        }


    }

    const signUp = () => {

    };

    const signIn = async ({ correo, password }: LoginData) => {

        try {
            const response = await cafeAPI.post<LoginResponse>('/auth/login', {
                correo,
                password
            });

            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.usuario
                }
            });

            writeTokenToStorage(response.data.token);

        } catch (error: any) {

            if (error.response) {
                // La respuesta fue hecha y el servidor respondió con un código de estado
                // que esta fuera del rango de 2xx
                console.log('error.response.data: ', JSON.stringify(error.response.data, null, 4));
                console.log('error.response.status: ', JSON.stringify(error.response.status, null, 4));
                console.log('error.response.headers: ', JSON.stringify(error.response.headers, null, 4));

                dispatch({
                    type: 'addError',
                    payload: error.response.data.msg || 'Información incorrecta'
                })

            } else if (error.request) {
                // La petición fue hecha pero no se recibió respuesta
                // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                // http.ClientRequest en node.js
                console.log('error.response.headers: ', JSON.stringify(error.request, null, 4));
            } else {
                // Algo paso al preparar la petición que lanzo un Error
                console.log('Error.message', JSON.stringify(error.message, null, 4));
            }
            console.log('Error Config', JSON.stringify(error.config, null, 4));
        }
    };

    const logOut = () => {
        clearTokenInStorage();
        dispatch({
            type: 'logOut'
        });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' })
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