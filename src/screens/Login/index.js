import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LineSeperater from '../../components/seperaters/line-seperater';
import { theme } from '../../theme';
function Login(props) {
    return (
        <View style={{
            flex: 1, backgroundColor: theme.colors.LIGHT_BLACK, padding: 2
        }}>
            <Text style={{ color: theme.colors.WHITE, fontSize: 80, fontWeight: '500' }}>Welcome back!</Text>
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
            <Text style={{ color: theme.colors.BLUE, marginVertical: 10 }}>Already have account?</Text>
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
                width: '100%',
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
        </View>
    );
}

export default Login;