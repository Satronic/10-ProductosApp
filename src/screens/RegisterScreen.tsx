import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Background } from '../components/Background';
import { Logo } from '../components/Logo';
import { loginstyles } from '../theme/themes';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface RegisterScreenProps extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: RegisterScreenProps) => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    const onRegister = () => {
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
                    <Text style={loginstyles.title}>Crear Cuenta</Text>


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

                    <Text style={loginstyles.label}>Name</Text>
                    <TextInput
                        style={loginstyles.input}
                        placeholder='Ingrese su nombre'
                        placeholderTextColor='#ccc'
                        keyboardType="ascii-capable"
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
