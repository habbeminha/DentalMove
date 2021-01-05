import React from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon';

const HomePage = () => {

    return(
        <MainContainer>
            <MainIcon />
            <StyledButton>ENTRAR</StyledButton>
            <StyledButton>CADASTRAR</StyledButton>
        </MainContainer>
    );
}

export default HomePage;