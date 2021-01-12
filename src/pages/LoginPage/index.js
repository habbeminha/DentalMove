import React from 'react';
import { View, Text, TextInput } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon'; 
import StyledLink from '../../components/StyledLink';

const LoginPage = ({navigation}) => {

    return(
        <MainContainer> 
            <MainIcon/>
            <TextInput />
            <StyledInput placeholder='Usuário'/>
            <StyledInput placeholder='Senha' secureTextEntry/>
            <StyledLink style={{marginTop:'0.5rem', marginBottom: '1rem'}}>Esqueci a senha</StyledLink>
            <StyledButton>ENTRAR</StyledButton>
            <StyledLink onPress={() => navigation.goBack() }
            style={{marginTop: '3rem'}}>Voltar</StyledLink>
        </MainContainer>
    );
}

export default LoginPage;
