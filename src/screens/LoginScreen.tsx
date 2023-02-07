import React, { useContext, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { loginstyles } from '../theme/themes';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface LoginScreenProps extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: LoginScreenProps) => {

    const { signIn, removeError, errorMessage } = useContext(AuthContext);

    useEffect(() => {
      if(errorMessage === '') return;
      Alert.alert('Login Incorrecto', errorMessage, [
        {
            text: 'OK',
            onPress: removeError
        }
      ]);
    }, [errorMessage])
    

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    const onLogin = () => {
        // console.log(email, password);
        Keyboard.dismiss();
        console.log(email, password)
        signIn({correo: email, password: password});
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
                    <Text style={loginstyles.title}>iniciar sesión</Text>
                    <Text style={loginstyles.label}>E-mail</Text>
                    <TextInput
                        style={loginstyles.input}
                        placeholder='Ingrese su e-mail'
                        placeholderTextColor='#ccc'
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
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
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                    />

                    <View style={loginstyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginstyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginstyles.buttonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginstyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginstyles.crearCuenta}
                            onPress={() => navigation.replace('RegisterScreen')} //
                        >
                            <Text style={loginstyles.buttonText}>Crear Cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

