import React, {useState} from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon'; 
import StyledLink from '../../components/StyledLink';

import { login } from '../../firebase/services';

const LoginPage = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}} enabled={true} keyboardVerticalOffset={0} >
            <MainContainer> 
                <MainIcon/>
                <View style={{width: '80%', alignItems: 'center'}}>
                <StyledInput placeholder='Email' keyboardType='email-address'
                onChangeText={ text => setEmail(text) } value={email}/>
                <StyledInput placeholder='Senha' secureTextEntry
                onChangeText={ text => setPassword(text) } value={password}/>
                <StyledLink style={{marginTop: 16, marginBottom: 16}}
                onPress={ () => navigation.navigate('ForgotPassword') }>Esqueci a senha</StyledLink>
                </View>
                <StyledButton text='ENTRAR' onPress={() => login(email, password, navigation)}/>
                <StyledLink onPress={() => navigation.goBack() }
                style={{marginTop: 3}}>Voltar</StyledLink>
            </MainContainer>
        </KeyboardAvoidingView>
    );
}

export default LoginPage;
