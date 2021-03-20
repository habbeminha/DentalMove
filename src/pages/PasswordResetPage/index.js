import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import InfoText from '../../components/InfoText';
import MainContainer from '../../components/MainContainer';
import MainIcon from '../../components/MainIcon';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import StyledLink from '../../components/StyledLink';
import { passwordReset } from '../../firebase/services';

const PasswordResetPage = ({navigation}) => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const checkInputs = () => {
        if(code === ''){
            Alert.alert('Código inválido');
        } else if(newPassword.length < 6){
            Alert.alert('Senha inválida', 'A senha deve ter pelo menos 6 caracteres');
        } else {
            passwordReset(code, newPassword, navigation);
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
                    Digite o código recebido por email e sua nova senha.
                </InfoText>
                <StyledInput placeholder="Código" value={code} onChangeText={ text => setCode(text)}/>
                <StyledInput placeholder="Nova senha" value={newPassword} 
                onChangeText={ text => setNewPassword(text)} secureTextEntry={true}/>
                <StyledButton text="Alterar senha" 
                onPress={ () => checkInputs()} />
                <StyledLink onPress={ () => navigation.navigate('ForgotPassword') } style={{marginTop: 3}}>
                    Não recebi o código no email
                </StyledLink>
                <StyledLink onPress={ () => navigation.navigate('Home') } style={{marginTop: 3}}>
                    Voltar
                </StyledLink>
            </MainContainer>
        </KeyboardAvoidingView>
    )
};

export default PasswordResetPage;