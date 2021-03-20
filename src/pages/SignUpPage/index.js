import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import RadioOption from '../../components/RadioOption';
import RadiosContainer from '../../components/RadiosContainer'

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
        else if(password.length < 6){
            errors += 'A senha deve conter pelo menos 6 caracteres\n';
        } 
        else if(password !== confirmPassword){
            errors += 'As senhas não conferem\n';
        }
        else if(type === ''){
            errors += 'Marque uma opção\n';
        }
        
        if(errors.length === 0){
            const emailResult = await firebase.auth().fetchSignInMethodsForEmail(email);
            if(emailResult.length !== 0){
                Alert.alert('O email já esta sendo usado');
                return false;
            } else {
                if( type === 'Atletas'){
                    navigation.navigate('Athletes', {username, email, password, type});
                } else if( type === 'Profissionais da Saúde'){
                    navigation.navigate('Professionals', {username, email, password, type})
                }
                return true;
            }
        } else {
            Alert.alert(errors);
            return false;
        }
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}} enabled={true} keyboardVerticalOffset={0} >
        <MainContainer> 
            <Title title="Cadastre-se"/>

            <ScrollView style={{alignContent: 'flex-start', width: '80%'}}>
                <StyledInput placeholder='Nome de usuário' 
                value={username} onChangeText={(text) => setUsername(text)}/>
                <StyledInput placeholder='Email' keyboardType='email-address'
                value={email} onChangeText={ (text) => setEmail(text)} />
                <StyledInput placeholder='Senha' secureTextEntry
                value={password} onChangeText={ (text) => setPassword(text)}/>
                <StyledInput placeholder='Confirme a senha' secureTextEntry
                value={confirmPassword} onChangeText={ (text) => setConfirmPassword(text)}/>
                <RadiosContainer title="Você é um(a): ">
                    <RadioOption title="Atleta" 
                    status={type === 'Atletas' ? 'checked' : 'unchecked'}
                    onPress={ () => setType('Atletas')}/>
                    <RadioOption title="Profissional da saúde" 
                    status={type === 'Profissionais da Saúde' ? 'checked' : 'unchecked'}
                    onPress={ () => setType('Profissionais da Saúde')}/>
                </RadiosContainer>
            </ScrollView>
            <StyledButton text='CONTINUAR' 
            onPress={() => checkInputs()} />
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
        </KeyboardAvoidingView>
    );
}

export default SignUpPage;
