import React from 'react';
import { View, Text } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';

const SignUpPage = () => {

    return(
        <MainContainer> 
        
         <StyledInput placeholder='Nome de usuário'/>
         <StyledInput placeholder='Email'/>
         <StyledInput placeholder='Senha'/>
         <StyledButton> CADASTRAR</StyledButton>

        </MainContainer>
    );
}

export default SignUpPage;
