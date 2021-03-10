import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container } from './styles.js';

const MainContainer = (props) => {
    return(
        <ScrollView style={{backgroundColor: '#5599FF'}}>
            <Container >
                {props.children}
            </Container>
        </ScrollView>
    )
}

export default MainContainer;