import React from 'react';
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import LineSeperater from '../../../components/seperaters/line-seperater';
import { theme } from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Item(props) {
    return (
        <View style={{
            shadowColor: theme.colors.GRAY,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderRadius: 10,
            flexDirection: 'row',
            width: windowWidth - 50,
            height: windowHeight - 200,
            marginVertical: 10,
            marginHorizontal: 10,
        }}>
            <View style={{
                width: '100%'
            }}>
                <Image style={{
                    borderRadius: 10,
                    width: '100%', height: '100%'
                }} source={require('../../../assets/images/gamer-01.png')} />
                <TouchableOpacity activeOpacity={0.5} style={{
                    backgroundColor: theme.colors.MEDIUM_GRAY,
                    alignSelf: "center",
                    position: 'absolute', bottom: 50, width: '90%',
                    padding: 10,
                    borderRadius: 50,
                    shadowColor: theme.colors.MEDIUM_GRAY,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                    <Text style={{
                        color: theme.colors.WHITE,
                        fontSize: theme.fontSize.MD,
                        fontWeight: theme.fontWeight.XL,
                        textAlign: 'center'
                    }}>View</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default Item;