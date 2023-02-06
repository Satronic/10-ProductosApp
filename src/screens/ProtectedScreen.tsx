import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthConrtext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import useTokenStorage from '../hooks/useTokenStorage';



export const ProtectedScreen = () => {

    const { token } = useContext(AuthContext);

    // const {writeTokenToStorage} = useTokenStorage();

    // const tokenInStorage = readTokenFromStorage();

    return (
        <View>
            <Text style={styles.text}>Protected Screen</Text>
            <Text style={styles.text}>Token in state: {token}</Text>
            {/* <Text style={styles.text}>{JSON.stringify(tokenInStorage)}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})
