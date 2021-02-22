import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import RadioOption from '../../components/RadioOption';
import { RadioContainer } from './styles';

import { firebase } from '../../firebase/config'
import AtletasPage from '../AtletasPage';

const SignUpPage = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('');

    const createNewUser = async () => {
        if(checkInputs()){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    username,
                    password,
                    type,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        alert('Cadastro realizado com sucesso')
                        //navigation.navigate('Home', {user: data});
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
            .catch((error) => {
                alert(error);
        });
        } 
    }

    const checkInputs = async () => {
        let errors = '';
        if(email.length < 3){
            errors += 'Email Inválido\n';
        }
        if(password.length < 8){
            errors += 'A senha deve conter mais de 8 caracteres\n';
        }
        if(password !== confirmPassword){
            errors += 'As senhas não conferem\n';
        }
        if(type === ''){
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

            <View style={{alignContent: 'left', width: '60%'}}>
                <StyledInput placeholder='Nome de usuário' 
                value={username} onChangeText={(text) => setUsername(text)}/>
                <StyledInput placeholder='Email'
                value={email} onChangeText={ (text) => setEmail(text)} />
                <StyledInput placeholder='Senha' type='password'
                value={password} onChangeText={ (text) => setPassword(text)}/>
                <StyledInput placeholder='Confirme a senha' type='password'
                value={confirmPassword} onChangeText={ (text) => setConfirmPassword(text)}/>
                <Text style={{color: '#FFF', marginTop: '1rem', fontSize: '1rem'}}>
                    Você é:
                </Text>
                <RadioOption title="Atleta" 
                status={type === 'atleta' ? 'checked' : 'unchecked'}
                onPress={ () => setType('atleta')}/>
                <RadioOption title="Profissional da saúde" 
                status={type === 'profissional' ? 'checked' : 'unchecked'}
                onPress={ () => setType('profissional')}/>
            </View>
            <StyledButton text='CONTINUAR' 
            onPress={() => {
                if(checkInputs() || true){
                    if( type === 'atleta'){
                        navigation.navigate('Athletes');
                    } else if( type === 'profissional'){
                        //navigation.navigate('')
                    }
                }
            }} />
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    );
}

export default SignUpPage;
