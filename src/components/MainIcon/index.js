import React from 'react';
import { Container, WordsContainer, ImageContainer } from './styles.js';
import  dente  from '../../../assets/dente.png';
import  {Image}  from 'react-native';


const MainIcon = () => {

    return(
        <Container>
            <WordsContainer className='MainIcon'>
                Dental Move
            </WordsContainer>
            <ImageContainer>
                <Image source={require ('../../../assets/dente.png')} width= '20px' height= ' 20px'/>
            </ImageContainer>
        </Container>
    )
}

export default MainIcon; 