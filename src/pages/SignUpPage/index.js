import React, { useState } from 'react';
import { View, Text } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import RadioOption from '../../components/RadioOption';
import RadiosContainer from '../../components/RadioContainer'

import { firebase } from '../../firebase/config'

const SignUpPage = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const checkInputs = async () => {
        let errors = '';
        if(username.length < 4){
            errors += 'Nome de usuário inválido\n';
        } 
        else if(!validateEmail(email)){
            errors += 'Email inválido\n';
        } 
        else if(password.length < 8){
            errors += 'A senha deve conter mais de 8 caracteres\n';
        } 
        else if(password !== confirmPassword){
            errors += 'As senhas não conferem\n';
        }
        else if(type === ''){
            errors += 'Marque uma opção\n';
        }
        
        if(errors === ''){
            const emailResult = await firebase.auth().fetchSignInMethodsForEmail(email);
            if(emailResult.length !== 0){
                alert('O email já esta sendo usado');
                return false;
            } else {
                return true;
            }
        } else {
            alert(errors);
            return false;
        }
    }

    return(
        <MainContainer> 
            <Title title="Cadastre-se"/>

            <View style={{alignContent: 'left', width: '80%'}}>
                <StyledInput placeholder='Nome de usuário' 
                value={username} onChangeText={(text) => setUsername(text)}/>
                <StyledInput placeholder='Email'
                value={email} onChangeText={ (text) => setEmail(text)} />
                <StyledInput placeholder='Senha' type='password'
                value={password} onChangeText={ (text) => setPassword(text)}/>
                <StyledInput placeholder='Confirme a senha' type='password'
                value={confirmPassword} onChangeText={ (text) => setConfirmPassword(text)}/>
                <Text style={{color: '#FFF', marginTop: 1, fontSize: 1}}>
                    Você é:
                </Text>
                <RadiosContainer title="Você é um(a): ">
                <RadioOption title="Atleta" 
                status={type === 'atleta' ? 'checked' : 'unchecked'}
                onPress={ () => setType('atleta')}/>
                <RadioOption title="Profissional da saúde" 
                status={type === 'profissional' ? 'checked' : 'unchecked'}
                onPress={ () => setType('profissional')}/>
                </RadiosContainer>
            </View>
            <StyledButton text='CONTINUAR' 
            onPress={() => {
                if(checkInputs()){
                    if( type === 'atleta'){
                        navigation.navigate('Athletes');
                    } else if( type === 'profissional'){
                        navigation.navigate('Professionals')
                    }
                }
            }} />
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    );
}

export default SignUpPage;
