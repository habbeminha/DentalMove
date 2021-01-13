import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon'; 
import StyledLink from '../../components/StyledLink';

import { firebase } from '../../firebase/config';

const LoginPage = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        //navigation.navigate('Home', {user})
                        alert('Login realizado com sucesso');
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return(
        <MainContainer> 
            <MainIcon/>
            <TextInput />
            <View style={{width: '60%', alignItems: 'center'}}>
            <StyledInput placeholder='Email' 
            onChangeText={ text => setEmail(text) } value={email}/>
            <StyledInput placeholder='Senha' secureTextEntry
            onChangeText={ text => setPassword(text) } value={password}/>
            <StyledLink style={{marginTop:'0.5rem', marginBottom: '1rem'}}>Esqueci a senha</StyledLink>
            </View>
            <StyledButton text='ENTRAR' onPress={login}/>
            <StyledLink onPress={() => navigation.goBack() }
            style={{marginTop: '3rem'}}>Voltar</StyledLink>
        </MainContainer>
    );
}

export default LoginPage;
