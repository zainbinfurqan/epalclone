import React from 'react';
import { ScrollView, Text } from 'react-native';
import Container from '../../../components/container'
import { theme } from '../../../theme';
import Item from '../components/item';

function GamesList(props) {

    const games = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return (
        <Container>
            <Text style={{
                fontSize: theme.fontSize.XL,
                color: theme.colors.WHITE,
                padding: 10,
                fontWeight: theme.fontWeight.XL
            }}>Games List</Text>
            <Text style={{
                fontSize: theme.fontSize.SM,
                color: theme.colors.GRAY,
                padding: 10,
            }}>List of games which you can see and select totally depend on random </Text>
            <ScrollView>
                {games.map((item, index) => {
                    return (
                        <Item />
                    )
                })}
            </ScrollView>
        </Container>
    );
}

export default GamesList;