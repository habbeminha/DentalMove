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
    const [useSupplys, setUseSupplys] = useState(null);
    const [mouthGuard, setMouthGuard] = useState(null);

    const checkInputs = () => {

    }

    return(
        <MainContainer>
            <Title title="Atleta"/>
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
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
                    <RadioOption title="Sim" /* Alimentação e erosão dental */
                    status={useSupplys ? 'checked' : 'unchecked'} onPress={ () => setUseSupplys(true)}/>
                    <RadioOption title="Não" 
                    status={useSupplys === false ? 'checked' : 'unchecked'} onPress={ () => setUseSupplys(false)}/>
                </RadiosContainer>
                <RadiosContainer title="Faz uso de protetor bucal?">
                <RadioOption title="Sim" 
                    status={mouthGuard ? 'checked' : 'unchecked'} onPress={ () => setMouthGuard(true)}/>
                    <RadioOption title="Não" /* Protetor Bucal */
                    status={mouthGuard === false ? 'checked' : 'unchecked'} onPress={ () => setMouthGuard(false)}/>
                </RadiosContainer>
                <RadiosContainer title="Sente desconforto ou barulhos ao mexer a boca?">
                    <RadioOption title="Sim"/> {/* Relação equilíbrio, oclusão e esporte */}
                    <RadioOption title="Não"/>
                </RadiosContainer>
                <RadiosContainer title="Já sofreu algum trauma na face?">
                    <RadioOption title="Sim"/> {/* Traumatismos orofaciais no esporte */}
                    <RadioOption title="Não"/>
                </RadiosContainer>
            </View>
            <StyledButton text='CADASTRAR' onPress={() => {}}/>
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    )
}

export default AthletesPage;
