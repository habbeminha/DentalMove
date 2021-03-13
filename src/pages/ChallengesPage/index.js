import React, { useState } from 'react';
import { Text } from 'react-native';
import Challenge from '../../components/Challenge';
import PageContainer from '../../components/PageContainer';
import { ChallengesCounter } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
//import './style.css';

const ChallengesPage = () => {

    const [showProgress, setShowProgress] = useState();
    const complete = 1;
    const total = 3

    return(
        <PageContainer>
            <ChallengesCounter>
                <Text style={{fontSize: 32, color: 'black'}}>
                    1/3
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                    Desafios Cumpridos
                </Text>
            </ChallengesCounter>
            <Text style={{textAlign: 'left', width: '95%',
                    fontSize: 20}}>
                Desafios:
            </Text>
            <Challenge total={15} actual={5} showProgress={showProgress == 1}
                title="Salvar 10-20 artigos" onPress={ () => setShowProgress(1)}/>
            <Challenge total={15} actual={15} showProgress={showProgress == 2}
                title="Ler 10-20 artigos" onPress={ () => setShowProgress(2)}/>
            <Challenge total={25} actual={5} showProgress={showProgress == 3}
                title="Compartilhar 5-10 artigos" onPress={ () => setShowProgress(3)}/>
        </PageContainer>
    )
};

export default ChallengesPage;