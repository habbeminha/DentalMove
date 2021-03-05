import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import RadiosContainer from '../../components/RadiosContainer';

import { firebase } from '../../firebase/config'
import RadioOption from '../../components/RadioOption';

const ProfessionalsPage = ({navigation}) => {
    
    const checkInputs = () => {

    }

    return(
        <MainContainer>
            <Title title="Profissional da Saúde"/>
                <Text style={{color: 'white', fontSize: '1.1rem', textAlign: 'center'}}>
                    Para melhor atender suas necessidades, responda:
                </Text>
            <View>
                <RadiosContainer title="Conduz atendimento personalizado ao atleta?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
                <RadiosContainer title="Que tipo de atleta você atende?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
                <RadiosContainer title="Quais são seus principais interesses sobre o tratamento de atletas?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
                <RadiosContainer title="Confecciona protetores bucais?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
            </View>
            <StyledButton text='CADASTRAR' onPress={() => {}}/>
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    )
}

export default ProfessionalsPage;
