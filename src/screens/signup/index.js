import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Container from '../../components/container';
import LineSeperater from '../../components/seperaters/line-seperater';
import { theme } from '../../theme';

function Registration(props) {
    return (
        <Container styles={{ paddingVertical: 5 }}>
            <Text style={{
                color: theme.colors.WHITE,
                fontSize: theme.fontSize.XL3,
                fontWeight: theme.fontWeight.XL3,
                marginHorizontal: 10
            }}>Lets create your account!</Text>
            <Text style={{
                color: theme.colors.WHITE,
                color: theme.colors.GRAY, fontSize: theme.fontSize.SM,
                margin: 10
            }}>ACCOUNT INFORMATION</Text>
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='firstname'
                placeholderTextColor={theme.colors.GRAY} />
            <LineSeperater />
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='lastname'
                placeholderTextColor={theme.colors.GRAY} />
            <LineSeperater />
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='email'
                placeholderTextColor={theme.colors.GRAY} />
            <LineSeperater />
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={theme.colors.GRAY} />
            <LineSeperater />
            <TextInput style={{
                backgroundColor: theme.colors.BLACK,
                color: theme.colors.WHITE
            }}
                placeholder='Password Confirmation'
                secureTextEntry={true}
                placeholderTextColor={theme.colors.GRAY} />
            <LineSeperater />
            <Text style={{
                color: theme.colors.GRAY,
                margin: 10
            }}>By creating an account, you're agreeing to our terms and conditions, and privacy policy.</Text>
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
                    color: theme.colors.WHITE, textAlign: 'center',
                }}>CREATE ACCOUNT!</Text>
            </TouchableOpacity>
        </Container>
    );
}

export default Registration;