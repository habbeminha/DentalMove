import React from 'react';
import { View, Text } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon'; 
const LoginPage = () => {

    return(
        <MainContainer> 
         <MainIcon/>
         <StyledInput placeholder='Usuário'/>
         <StyledInput placeholder='Senha'/>
         <StyledButton> ENTRAR</StyledButton>

        </MainContainer>
    );
}

export default LoginPage;