import React from 'react';
import { View } from 'react-native';
import { Container, ChallengeHeader, ProgressBar, Title } from './styles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Challenge = (props) => {

    const progress = (props.actual/props.total)*100;

    return(
        <Container onPress={props.onPress}>
            <ChallengeHeader>
                {
                    progress >= 100 ? 
                    <MaterialCommunityIcons name="bookmark-check-outline" size={36} color="#434343" />
                    :
                    <MaterialCommunityIcons name="bookmark-minus-outline" size={32} color="#434343" /> 
                }
                <Title>
                    {props.title}
                </Title>
            </ChallengeHeader>
            {props.showProgress &&
            <ProgressBar>
                <View style={{backgroundColor: '#5599FF', height: 25, width: progress+'%'}}/>
            </ProgressBar> 
            }
            <View style={{backgroundColor: '#434343', height: 1}}/>
        </Container>
    )
};

export default Challenge;