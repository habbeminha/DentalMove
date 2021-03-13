import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import RadiosContainer from '../../components/RadiosContainer';
import RadioOption from '../../components/RadioOption';
import CheckboxOption from '../../components/CheckboxOption';

import { firebase } from '../../firebase/config'
import { createNewUser } from '../../firebase/services';

const ProfessionalsPage = ({route, navigation}) => {

    console.log(route.params);

    const [athleteService, setAthleteService] = useState(true);
    const [aquatic, setAquatic] = useState(false);
    const [individual, setIndividual] = useState(false);
    const [colective, setColective] = useState(false);
    const [doppingInterest, setDoppingInterest] = useState(false);
    const [mouthGuardInterest, setMouthGuardInterest] = useState(false);
    const [enamelInterest, setEnamelInterest] = useState(false);
    const [dtmInterest, setDtmInterest] = useState(false);
    //const [interests, setInterests] = useState([]);
    
    const checkInputs = () => {
        if(!(doppingInterest || mouthGuardInterest || enamelInterest || dtmInterest)){
            window.alert('Marque pelo menos um assunto de interesse');
            return false;
        } else if (athleteService && !(aquatic || colective || individual)) {
            window.alert('Marque pelo menos um assunto de interesse');
            return false;
        } else {
            const auxInt = [];

            aquatic && auxInt.push('Esportes aquáticos: natação, surfe, entre outros');
            individual && auxInt.push('Esportes individuais: lutas, corrida, ciclismo, entre outros');
            colective && auxInt.push('Esportes coletivos: handebol, futebol, basquete, entre outros');
            doppingInterest && auxInt.push('Protocolos para Dopping');
            mouthGuardInterest && auxInt.push('Protocolos para protetores bucais');
            enamelInterest && auxInt.push('Protocolos para erosão dental');
            dtmInterest && auxInt.push('Protocolos para tratamento de DTM');

            createNewUser(route.params.email, route.params.username, 
                route.params.password, route.params.type, auxInt, navigation);

            return true;
        }
    }

    return(
        <MainContainer>
            <Title title="Profissional da Saúde"/>
                <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
                    Para melhor atender suas necessidades, responda:
                </Text>
            <View>
                <RadiosContainer title="Conduz atendimento personalizado ao atleta?">
                    <RadioOption title="Sim" 
                    status={athleteService ? 'checked' : 'unchecked'} onPress={ () => setAthleteService(true)}/>
                    <RadioOption title="Não" 
                    status={!athleteService ? 'checked' : 'unchecked'} onPress={ () => setAthleteService(false)}/>
                </RadiosContainer>
                { athleteService && 
                <RadiosContainer title="Que tipo de atleta você atende?">
                    <CheckboxOption title="Esportes aquáticos: natação, surfe, entre outros"
                    checked={aquatic} onPress={ () => setAquatic(!aquatic)}/>
                    <CheckboxOption title="Esportes individuais: lutas, corrida, ciclismo, entre outros"
                    checked={individual} onPress={ () => setIndividual(!individual)}/>
                    <CheckboxOption title="Esportes coletivos: handebol, futebol, basquete, entre outros" 
                    checked={colective} onPress={ () => setColective(!colective)}/>
                </RadiosContainer>
                }
                <RadiosContainer title="Quais são seus principais interesses sobre o tratamento de atletas?">
                    <CheckboxOption title="Protocolos para dopping" 
                    checked={doppingInterest === true} onPress={ () => setDoppingInterest(!doppingInterest)}/>
                    <CheckboxOption title="Protocolos para protetor bucal" 
                    checked={mouthGuardInterest === true} onPress={ () => setMouthGuardInterest(!mouthGuardInterest)}/>
                    <CheckboxOption title="Protocolos para erosão dental"  
                    checked={enamelInterest === true} onPress={ () => setEnamelInterest(!enamelInterest)}/>
                    <CheckboxOption title="Protocolos para tratamento de DTM" 
                    checked={dtmInterest === true} onPress={ () => setDtmInterest(!dtmInterest)}/>
                </RadiosContainer>
            </View>
            <StyledButton text='CADASTRAR' 
                onPress={() => checkInputs() }/>
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    )
}

export default ProfessionalsPage;
