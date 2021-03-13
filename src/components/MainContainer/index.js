import React from 'react';
import { Container, ScrollView } from './styles.js';

const MainContainer = (props) => {
    return(
        <ScrollView>
            <Container >
                {props.children}
            </Container>
        </ScrollView>
    )
}

export default MainContainer;