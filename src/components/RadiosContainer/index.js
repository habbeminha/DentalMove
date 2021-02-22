import React from 'react';
import { View } from 'react-native';
import {Container, ContainerTitle} from './styles';

const RadiosContainer = (props) => {

    return(
        <View>
            <ContainerTitle>
                {props.title}
            </ContainerTitle>
            <Container>
                {props.children}
            </Container>
        </View>
    )
}

export default RadiosContainer;