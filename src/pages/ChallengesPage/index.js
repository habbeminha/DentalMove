import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Challenge from '../../components/Challenge';
import PageContainer from '../../components/PageContainer';
import { ChallengesCounter } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useFocusEffect } from '@react-navigation/native';
import { getSavedArticlesNum } from '../../firebase/services';
import { getAccomplishedChallengesNum, getActiveChallengesNum, getChallenges } from '../../firebase/challenges';
//import './style.css';

const ChallengesPage = ({navigation}) => {

    const [challenges, setChallenges] = useState();
    const [showProgress, setShowProgress] = useState();
    const [total, setTotal] = useState(0);
    const [accomplished, setAccomplished] = useState(0);

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
            setChallenges(getChallenges());
            console.log('useeffect')
            setAccomplished(getAccomplishedChallengesNum());
            setTotal(getActiveChallengesNum());
        });
        return unsubscribe;
    }, [navigation])

    return(
        <PageContainer>
            <ChallengesCounter>
                <Text style={{fontSize: 32, color: '#434343'}}>
                    {accomplished}/{total}
                </Text>
                <Text style={{fontWeight: 'bold', color: '#434343'}}>
                    Desafios Cumpridos
                </Text>
            </ChallengesCounter>
            <Text style={{textAlign: 'left', width: '95%',
                    fontSize: 20}}>
                Desafios:
            </Text>

            { challenges && challenges.map( (challenge, index) => 
                challenge.show && 
                <Challenge total={challenge.objective} actual={challenge.actual} showProgress={showProgress == index}
                key={index} title={challenge.title} onPress={ () => setShowProgress(index)}/>
            )}
        </PageContainer>
    )
};

export default ChallengesPage;