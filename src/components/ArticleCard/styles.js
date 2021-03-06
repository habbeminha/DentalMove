import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap; 
    justify-content: space-between;
    border: 1px solid #5599FF;
    padding: 8px;
    margin-top: 10px;
    width: ${ windowWidth*0.93}px;
`;

export const ArticleHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ArticleTitle = styled.Text`
    font-weight: bold;
    width: 90%;
    font-size: 16px;
`;

export const ArticleAuthor = styled.Text`
    
`;