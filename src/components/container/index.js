import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { theme } from '../../theme'

function Container(props) {
    return (
        <SafeAreaView style={{
            backgroundColor: theme.colors.LIGHT_BLACK,
            flex: 1,
            ...props.styles
        }}>
            {props.children}
        </SafeAreaView>
    );
}

export default Container;