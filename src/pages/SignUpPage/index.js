import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import { RadioContainer } from './styles';

const SignUpPage = ({navigation}) => {

    const [type, setType] = useState('');

    return(
        <MainContainer> 
            <Title title="Cadastre-se"/>

            <View style={{alignContent: 'left', width: '40%'}}>
                <StyledInput placeholder='Nome de usuário'/>
                <StyledInput placeholder='Email'/>
                <StyledInput placeholder='Senha' type='password'/>
                <Text style={{color: '#FFF', marginTop: '1rem', fontSize: '1rem'}}>
                    Você é:
                </Text>
                <RadioContainer>
                    <RadioButton color='#FFF' uncheckedColor='#FFF'
                     value='atleta' onPress={ () => setType('atleta')} 
                     status={ type === 'atleta' ? 'checked' : 'unchecked' } />
                    <Text style={{color: '#FFF'}}>Atleta</Text>
                </RadioContainer>
                <RadioContainer>
                    <RadioButton color='#FFF' uncheckedColor='#FFF'
                     value='profissional' onPress={ () => setType('profissional')} 
                     status={ type === 'profissional' ? 'checked' : 'unchecked' } />
                    <Text style={{color: '#FFF'}}>Profissional da saúde</Text>
                </RadioContainer>
            </View>
            <StyledButton>CONTINUAR</StyledButton>
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    );
}

export default SignUpPage;
