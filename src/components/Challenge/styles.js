import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap; 
    justify-content: space-between;
    /* border: 1px solid #5599FF; */
    padding: 8px;
    margin-top: 15px;
    width: ${ windowWidth*0.93}px;
`;

export const ChallengeHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #434343;
    font-weight: bold;
    width: 90%;
    font-size: 20px;
`;

export const ProgressBar = styled.View`
    height: 25px;
    border-radius: 20px;
    border-color: #434343;
    border-width: 2px;
    overflow: hidden;
    width: 90%;
    margin-bottom: 10px;
    margin-top: 10px;
`;