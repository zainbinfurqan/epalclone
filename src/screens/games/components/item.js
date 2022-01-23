import React from 'react';
import { Text, View } from 'react-native';
import LineSeperater from '../../../components/seperaters/line-seperater';
import { theme } from '../../../theme';

function Item(props) {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                padding: 2,
                margin: 4
            }}>
                <View style={{
                    flex: 0.15,
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    padding: 2,
                }}>
                    <Text style={{
                        color: "white",
                        fontSize: theme.fontSize.SM + 5,
                        fontWeight: theme.fontWeight.XL,
                        textAlign: 'center',
                        alignSelf: 'center',
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        borderRadius: 100 / 2,
                    }}>Z</Text>
                </View>
                <View style={{
                    flex: 0.85,
                    padding: 5,
                }}>
                    <Text style={{
                        color: "white",
                        fontWeight: theme.fontWeight.XL,
                        fontSize: theme.fontSize.SM,
                    }}>Title</Text>
                    <Text style={{
                        color: "white",
                        fontSize: theme.fontSize.XS,
                    }}>Ok so this text is for dummy porpose and now we can look into it so we can get the idea</Text>
                </View>
            </View >
            <LineSeperater />
        </View>
    );
}

export default Item;