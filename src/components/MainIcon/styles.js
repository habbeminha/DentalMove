import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
`;

export const WordsContainer = styled.View`
    margin: 0 -2px;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
`;

export const WordsText = styled.Text`
    color: #FFF;
    font-size: 40px;
    text-align: right;
    margin: 0;
    padding: 0;
    line-height: 38px;
`;

export const ImageContainer = styled.View`
    height: 80px;
    width: 80px;
`;