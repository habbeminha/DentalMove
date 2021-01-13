import React from 'react';
import { Container, Text } from './styles'

const StyledButton = (props) => {
    return(
        <Container onPress={props.onPress}>
            <Text>
                {props.text}
            </Text>
        </Container>
    )
}
export default StyledButton;