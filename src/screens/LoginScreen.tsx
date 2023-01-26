import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { loginstyles } from '../theme/themes';

export const LoginScreen = () => {
    return (
        <>
            <Background />
            <View style={loginstyles.containerForm}>
                <Logo />
                <Text style={loginstyles.title}>Login</Text>
                <Text style={loginstyles.label}>E-mail</Text>
                <TextInput
                    style={loginstyles.input}
                    placeholder='Ingrese su e-mail'
                    placeholderTextColor='#ccc'
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Text style={loginstyles.label}>Password</Text>
                <TextInput
                    style={loginstyles.input}
                    placeholder='Ingrese su contraseña'
                    placeholderTextColor='#ccc'
                    keyboardType="visible-password"
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <View style={loginstyles.buttonContainer}>
                    <TouchableOpacity
                        style={loginstyles.button}
                    >
                        <Text style={loginstyles.buttonText}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

