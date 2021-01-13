import React from 'react';
import MainContainer from '../../components/MainContainer';
import StyledButton from '../../components/StyledButton';
import MainIcon from '../../components/MainIcon';
import StyledLink from '../../components/StyledLink';

const HomePage = ({ navigation }) => {

    return(
        <MainContainer>
            <MainIcon />
            <StyledButton onPress={ () => navigation.navigate('Login')} text='ENTRAR' />
            <StyledButton onPress={ () => navigation.navigate('SignUp')} text='CADASTRAR'/>

            <StyledLink style={{marginTop: '3rem'}}>Visitante</StyledLink>
        </MainContainer>
    );
}

export default HomePage;