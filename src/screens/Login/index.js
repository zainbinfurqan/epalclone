import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Container from '../../components/container';
import LineSeperater from '../../components/seperaters/line-seperater';
import { theme } from '../../theme';
function Login(props) {
    return (
        <Container>
            < Text style={{
                padding: 10, color: theme.colors.WHITE, fontSize: 80, fontWeight: '500'
            }}>Welcome back!</Text>
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='Email'
                placeholderTextColor={theme.colors.WHITE} />
            <LineSeperater />
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={theme.colors.WHITE} />
            <Text style={{
                color: theme.colors.BLUE,
                padding: 10, marginVertical: 10
            }}>Already have account?</Text>
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 10,
                alignSelf: 'center',
                width: '90%',
                backgroundColor: theme.colors.RED,
                padding: 10,
                borderRadius: 2
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: theme.colors.WHITE, textAlign: 'center',
                }}>Login</Text>
            </TouchableOpacity>
        </Container>
    );
}

export default Login;