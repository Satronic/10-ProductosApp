import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { loginstyles } from '../theme/themes';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    const onLogin = () => {
        console.log(email, password);
        Keyboard.dismiss();
    };

    return (
        <>
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={(Platform.OS === 'ios' ? 'padding' : 'height')}
            >
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
                        onChangeText={(value)=>onChange(value, 'email')}
                        value={email}
                    />
                    <Text style={loginstyles.label}>Password</Text>
                    <TextInput
                        style={loginstyles.input}
                        placeholder='Ingrese su contraseña'
                        placeholderTextColor='#ccc'
                        secureTextEntry={true}
                        // keyboardType="visible-password"
                        
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value)=>onChange(value, 'password')}
                        value={password}
                    />
                    <View style={loginstyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginstyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginstyles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

