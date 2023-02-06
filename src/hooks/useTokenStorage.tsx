// import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// type Token = string | null;

// export default function useTokenStorage() {

//     const [tokenStorage, setTokenStorage] = useState<Token>(null);

//     useEffect(() => {
//         if (tokenStorage === null) {
//             AsyncStorage.getItem('token').then(data => {
//                 setTokenStorage(data);
//             });
//         }
//     }, [tokenStorage])

//     const writeTokenToStorage = (token: string) => {
//         AsyncStorage.setItem('token', token);
//     };

//     return {
//         writeTokenToStorage,
//         tokenStorage
//     }
// };

export default function useTokenStorage() {

    // const [tokenStorage, setTokenStorage] = useState<Token>(null);


    const readTokenFromStorage = async () => {
        const token = await Promise.all([
            AsyncStorage.getItem('token')
        ]);
        return token;
    };

    const writeTokenToStorage = (token: string) => {
        AsyncStorage.setItem('token', token);
    };

    const clearTokenInStorage = async () => {
        await AsyncStorage.removeItem('token');
    }

    return {
        readTokenFromStorage,
        writeTokenToStorage,
        clearTokenInStorage
    }
};