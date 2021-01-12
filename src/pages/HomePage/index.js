import React from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon';
import StyledLink from '../../components/StyledLink';

const HomePage = ({ navigation }) => {

    return(
        <MainContainer>
            <MainIcon />
            <StyledButton onPress={ () => navigation.navigate('Login')}>ENTRAR</StyledButton>
            <StyledButton onPress={ () => navigation.navigate('SignUp')}>CADASTRAR</StyledButton>

            <StyledLink style={{marginTop: '3rem'}}>Visitante</StyledLink>
        </MainContainer>
    );
}

export default HomePage;