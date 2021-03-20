import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import InfoText from '../../components/InfoText';
import MainContainer from '../../components/MainContainer';
import MainIcon from '../../components/MainIcon';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledLink from '../../components/StyledLink';
import { forgotPassword } from '../../firebase/services';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const ForgotPasswordPage = ({navigation}) => {

    const [email, setEmail] = useState('');

    const checkInputs = () => {
        if(!validateEmail(email)){
            Alert.alert('Email Inválido', 'Verifique o email digitado');
        } else {
            forgotPassword(email, navigation);
        }
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
            enabled={true}
            keyboardVerticalOffset={0}
        >
            <MainContainer>
                <MainIcon />
                <InfoText>
                    Digite o email cadastrado para receber seu código de alteração da senha.
                </InfoText>
                <StyledInput placeholder="Email" value={email} onChangeText={ text => setEmail(text)}/>
                <StyledButton text="Enviar" 
                onPress={ () => checkInputs()} />
                <StyledLink onPress={ () => navigation.navigate('PasswordReset') } style={{marginTop: 3, fontSize: 16}}>
                    Ja tenho o código
                </StyledLink>
                <StyledLink onPress={ () => navigation.navigate('Home') } style={{marginTop: 3}}>
                    Voltar
                </StyledLink>
            </MainContainer>
        </KeyboardAvoidingView>
    )
};

export default ForgotPasswordPage;