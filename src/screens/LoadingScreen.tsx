import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <ActivityIndicator size={60} color={"white"}/>
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>Verificando Sessión de Usuario</Text>
    </View>
  )
}
