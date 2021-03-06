import React from 'react';
import { Container, WordsContainer, WordsText, ImageContainer } from './styles.js';
import  dente  from '../../../assets/dente.png';
import  {Text, Image}  from 'react-native';
import {useFonts, Bungee_400Regular} from '@expo-google-fonts/dev'

const MainIcon = () => {

    useFonts({Bungee_400Regular});

    return(
        <Container>
            <WordsContainer >
                <WordsText style={{fontFamily: 'Bungee_400Regular'}}>
                    Dental&nbsp;&nbsp; 
                </WordsText>
                <WordsText style={{fontFamily: 'Bungee_400Regular'}}>
                    Move
                </WordsText>
            </WordsContainer>
            <ImageContainer>
                <Image source={dente} style={{ width: '100%', height: '100%'}}/>
            </ImageContainer>
        </Container>
    )
}

export default MainIcon; 