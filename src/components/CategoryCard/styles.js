import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
    padding: 15px;    
    display: flex;
    flex-direction: row;
    background-color: #EEE;
    flex-wrap: wrap;
    margin-top: 15px;
    align-items: center;
    border-radius: 10px;
    width: ${ windowWidth*0.90}px;
    box-shadow: 2px 2px 5px #AAA ;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: #444;
    font-size: 20px;
`;