import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import useTokenStorage from '../hooks/useTokenStorage';



export const ProtectedScreen = () => {

    const { token, user, logOut } = useContext(AuthContext);

    // const {writeTokenToStorage} = useTokenStorage();

    // const tokenInStorage = readTokenFromStorage();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Protected Screen</Text>
            <Text style={styles.text}>User: {JSON.stringify(user, null, 5)}</Text>
            <Text style={styles.text}>Token in state: {token}</Text>
            <Button 
                title='Salir'
                onPress={() => logOut()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
        color: 'white'
    }
})
