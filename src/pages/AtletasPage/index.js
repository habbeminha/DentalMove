import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import StyledInput from '../../components/StyledInput';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import RadioContainer from '../../components/RadioContainer';


import { firebase } from '../../firebase/config'

const AtletasPage = ({navigation}) => {

    const [type, setType] = useState('');

    return (
        <MainContainer> 
            <Title title="Atletas"/>
            <Text style = {{color:'#FFF', fontWeight: 'bold', fontSize:'18px'}}> Para melhor atender suas necessidades responda: </Text>
            <Text> Modalidade Praticada </Text>
            <RadioContainer>
                    <RadioButton color='#FFF' uncheckedColor='#FFF'
                     value='Modalidade Praticada' onPress={ () => setType('atleta')} 
                     status={ type === 'atleta' ? 'checked' : 'unchecked' } />
                    <Text style={{color: '#FFF'}}>Atleta</Text>
                </RadioContainer>
                <StyledButton text='CADASTRAR' onPress={ navigation.navigate('Home')}/> 
        </MainContainer>
        
        )
}

export default AtletasPage