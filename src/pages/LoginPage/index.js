import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
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
        <MainContainer> 
            <MainIcon/>
            <View style={{width: '80%', alignItems: 'center'}}>
            <StyledInput placeholder='Email' 
            onChangeText={ text => setEmail(text) } value={email}/>
            <StyledInput placeholder='Senha' secureTextEntry
            onChangeText={ text => setPassword(text) } value={password}/>
            <StyledLink style={{marginTop: 16, marginBottom: 16}}>Esqueci a senha</StyledLink>
            </View>
            <StyledButton text='ENTRAR' onPress={() => login(email, password)}/>
            <StyledLink onPress={() => navigation.goBack() }
            style={{marginTop: 3}}>Voltar</StyledLink>
        </MainContainer>
    );
}

export default LoginPage;
