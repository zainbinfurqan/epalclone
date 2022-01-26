import React from 'react';
import { Image, Text, View } from 'react-native';
import Container from '../../components/container';
import { theme } from '../../theme';

function Gamer(props) {
    return (
        <Container >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 0.1, alignSelf: 'center' }}>
                    <Text style={{ color: theme.colors.BLUE, textAlign: 'center', alignSelf: 'center' }}>back</Text>
                </View>
                <View style={{ flex: 0.9 }}>
                    <Text style={{
                        fontSize: theme.fontSize.XL,
                        textAlign: 'center',
                        marginVertical: 10,
                        fontWeight: theme.fontWeight.XL2, color: theme.colors.WHITE
                    }}>Zain Ahmed</Text>
                </View>
            </View>

            <Text style={{
                color: theme.colors.WHITE, fontSize: theme.fontSize.SM,
                textAlign: 'center', marginVertical: 15
            }}>Short Intro</Text>
            <View style={{ height: 500, borderWidth: 2, borderColor: 'white' }}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../assets/images/gamer-01.png')} />
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignContent: 'center',
                    justifyContent: "center"
                }}>
                    <View style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        borderWidth: 2,
                        borderColor: 'white',
                        height: 50, width: 50,
                        borderRadius: 50
                    }}>

                    </View>
                    <View style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        borderWidth: 2,
                        alignSelf: 'center',
                        borderColor: 'white',
                        height: 50, width: 50,
                        borderRadius: 50
                    }}>

                    </View>
                </View>
            </View>
            <View style={{
                height: 100,
                marginVertical: 10,
                borderWidth: 1, borderColor: 'white'
            }}>

            </View>
        </Container>
    );
}

export default Gamer;