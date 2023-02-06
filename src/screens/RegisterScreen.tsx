import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { loginstyles } from '../theme/themes';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthConrtext';

interface RegisterScreenProps extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {

    const { user, signUp, errorMessage, removeError } = useContext(AuthContext);
    // const [ registeredUser, setRegisteredUser ] = useState('');

    const { correo, password, nombre, onChange } = useForm({
        correo: '',
        password: '',
        nombre: ''
    });

    useEffect(() => {
        if (correo === user?.correo) {
            Alert.alert('Crear Cuenta ', 'Usuario registrado con exito', [
                {
                    text: 'OK',
                    // onPress: () => navigation.replace('ProtectedScreen')
                    onPress: () => null
                }
            ]);
        }
    }, [user?.correo]);

    useEffect(() => {
        if (errorMessage === '') return;
        Alert.alert('Error de Registro', errorMessage, [
            {
                text: 'OK',
                onPress: () => removeError()
            }
        ]);

    }, [errorMessage]);

    const onRegister = () => {
        console.log(correo, password);
        Keyboard.dismiss();
        signUp({ nombre, correo, password });
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
                    <Text style={loginstyles.title}>Crear Cuenta</Text>

                    <Text style={loginstyles.label}>Name</Text>
                    <TextInput
                        style={loginstyles.input}
                        placeholder='Ingrese su nombre'
                        placeholderTextColor='#ccc'
                        keyboardType="ascii-capable"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'nombre')}
                        value={nombre}
                    />

                    <Text style={loginstyles.label}>E-mail</Text>
                    <TextInput
                        style={loginstyles.input}
                        placeholder='Ingrese su e-mail'
                        placeholderTextColor='#ccc'
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'correo')}
                        value={correo}
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
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                    />

                    <View style={loginstyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginstyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginstyles.buttonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginstyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginstyles.crearCuenta}
                            onPress={() => navigation.replace('LoginScreen')}
                        >
                            <Text style={loginstyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
