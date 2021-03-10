import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 60px 0px;
`;

export const WordsContainer = styled.View`
    margin: 0 -2px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

export const WordsText = styled.Text`
    color: #FFF;
    font-size: 40px;
    text-align: right;
`;

export const ImageContainer = styled.View`
    height: 80px;
    width: 80px;
`;