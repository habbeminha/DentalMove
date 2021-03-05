import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title'; 
import RadiosContainer from '../../components/RadiosContainer';
import RadioOption from '../../components/RadioOption';

import { firebase } from '../../firebase/config'

const AthletesPage = ({navigation}) => {
    
    const [modality, setModality] = useState('');
    const [useSupplys, setUseSupplys] = useState(false);

    const checkInputs = () => {

    }

    return(
        <MainContainer>
            <Title title="Atleta"/>
                <Text style={{color: 'white', fontSize: '1.1rem', textAlign: 'center'}}>
                    Para melhor atender suas necessidades, responda:
                </Text>
            <View>
                <RadiosContainer title="Modalidade Praticada">
                    <RadioOption title="Esportes aquáticos: natação, surfe, entre outros"
                    status={modality === 'aquatic' ? 'checked' : 'unchecked'} onPress={ () => setModality('aquatic')}/>
                    <RadioOption title="Esportes individuais: lutas, corrida, ciclismo, entre outros"
                    status={modality === 'individual' ? 'checked' : 'unchecked'} onPress={ () => setModality('individual')}/>
                    <RadioOption title="Esportes coletivos: handebol, futebol, basquete, entre outros" 
                    status={modality === 'coletive' ? 'checked' : 'unchecked'} onPress={ () => setModality('coletive')}/>
                </RadiosContainer>
                <RadiosContainer title="Faz uso de isotônicos ou suplementos?">
                    <RadioOption title="Sim" 
                    status={useSupplys ? 'checked' : 'unchecked'} onPress={ () => setUseSupplys(true)}/>
                    <RadioOption title="Não" 
                    status={!useSupplys ? 'checked' : 'unchecked'} onPress={ () => setUseSupplys(false)}/>
                </RadiosContainer>
                <RadiosContainer title="Faz uso de protetor bucal?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
                <RadiosContainer title="Sente dor nas articulações?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
                <RadiosContainer title="Já sofreu algum trauma na face?">
                    <RadioOption title="Sim"/>
                    <RadioOption title="Não"/>
                </RadiosContainer>
            </View>
            <StyledButton text='CADASTRAR' onPress={() => {}}/>
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    )
}

export default AthletesPage;
