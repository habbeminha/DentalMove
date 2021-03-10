import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from './styles';

const PageContainer = (props) => {
    return(
        <ScrollView style={{backgroundColor: 'white'}}>
            <Container >
                {props.children}
            </Container>
        </ScrollView>
    )
}

export default PageContainer;