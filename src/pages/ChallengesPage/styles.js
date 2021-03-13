import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const ChallengesCounter = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: ${windowWidth*0.5}px;
    height: ${windowWidth*0.5}px;
    border-width: 5px;
    border-color: #434343;
    border-style: solid;
    border-radius: 4px;
`;