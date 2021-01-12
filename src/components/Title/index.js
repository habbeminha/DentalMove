import React from 'react';
import { Container, String, ImageContainer } from './styles';
import {useFonts, Bungee_400Regular} from '@expo-google-fonts/dev'
import { Image } from 'react-native';
import  dente  from '../../../assets/dente.png';

const Title = ( props ) => {

    useFonts({Bungee_400Regular});

    return(
        <Container style={{marginBottom: '2rem'}}>
            <ImageContainer>
                <Image source={dente} style={{ width: '100%', height: '100%'}}/>
            </ImageContainer>
            <String style={{fontFamily: 'Bungee_400Regular'}}>
                {props.title}
            </String>
        </Container>
    )

}

export default Title;
