import React from 'react';
import { View } from 'react-native';
import { theme } from '../../theme';

function LineSeperater(props) {
    return (
        <View style={{ borderBottomColor: theme.colors.MEDIUM_GRAY, borderBottomWidth: 0.5 }} />
    );
}

export default LineSeperater;