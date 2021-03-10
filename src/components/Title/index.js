import React from 'react';
import { Container, String, ImageContainer } from './styles';
import {useFonts} from '@expo-google-fonts/dev'
import { Image } from 'react-native';
import  dente  from '../../../assets/dente.png';

const Title = ( props ) => {

    let [fontLoaded] = useFonts({'Bungee_400Regular': require('../../../assets/Bungee-Regular.ttf')});

    return( !fontLoaded ? <></> :
        <Container style={{marginBottom: 32}}>
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
