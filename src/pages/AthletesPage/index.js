import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title'; 
import RadiosContainer from '../../components/RadiosContainer';
import RadioOption from '../../components/RadioOption';
import { createNewUser } from '../../firebase/services';

const AthletesPage = ({navigation, route}) => {
    
    const [modality, setModality] = useState('');
    const [useSupplys, setUseSupplys] = useState(null);
    const [mouthGuard, setMouthGuard] = useState(null);
    const [trauma, setTrauma] = useState(null);
    const [DTM, setDTM] = useState(null);
    
    const checkInputs = () => {
        if(modality.length === 0){
            window.alert('Marque a modalidade praticada');
            return false;
        } else if ( (useSupplys && mouthGuard && trauma && DTM) === null) {
            window.alert('Responda todas perguntas');
            return false;
        } else {
            const auxInt = [];

            modality === 'aquatic' && auxInt.push('Esportes aquáticos: natação, surfe, entre outros');
            modality === 'individual' && auxInt.push('Esportes individuais: lutas, corrida, ciclismo, entre outros');
            modality === 'coletive' && auxInt.push('Esportes coletivos: handebol, futebol, basquete, entre outros');
            useSupplys && auxInt.push('Alimentação e erosão dental');
            mouthGuard && auxInt.push('Protetor Bucal');
            trauma && auxInt.push('Traumatismos orofaciais no esporte');
            DTM && auxInt.push('Relação equilíbrio, oclusão e esporte');

            createNewUser(route.params.email, route.params.username, 
                route.params.password, route.params.type, auxInt, navigation);

            return true;
        }
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
                    <RadioOption title="Sim"
                    status={useSupplys ? 'checked' : 'unchecked'} onPress={ () => setUseSupplys(true)}/>
                    <RadioOption title="Não" 
                    status={useSupplys === false ? 'checked' : 'unchecked'} onPress={ () => setUseSupplys(false)}/>
                </RadiosContainer>
                <RadiosContainer title="Faz uso de protetor bucal?">
                <RadioOption title="Sim" 
                    status={mouthGuard ? 'checked' : 'unchecked'} onPress={ () => setMouthGuard(true)}/>
                    <RadioOption title="Não"
                    status={mouthGuard === false ? 'checked' : 'unchecked'} onPress={ () => setMouthGuard(false)}/>
                </RadiosContainer>
                <RadiosContainer title="Sente desconforto ou barulhos ao mexer a boca?">
                    <RadioOption title="Sim"
                    status={DTM ? 'checked' : 'unchecked'} onPress={ () => setDTM(true)}/>
                    <RadioOption title="Não"
                    status={DTM === false? 'checked' : 'unchecked'} onPress={ () => setDTM(false)}/>
                </RadiosContainer>
                <RadiosContainer title="Já sofreu algum trauma na face?">
                    <RadioOption title="Sim"
                    status={trauma ? 'checked' : 'unchecked'} onPress={ () => setTrauma(true)}/>
                    <RadioOption title="Não"
                    status={trauma === false ? 'checked' : 'unchecked'} onPress={ () => setTrauma(false)}/>
                </RadiosContainer>
            </View>
            <StyledButton text='CADASTRAR' onPress={() => checkInputs() }/>
            <StyledLink onPress={ () => navigation.goBack()}>Voltar</StyledLink>
        </MainContainer>
    )
}

export default AthletesPage;
