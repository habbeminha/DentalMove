import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    min-height: 100%;
    width: 100%;
    background-color: #5599FF;
    font-weight: bold;
    overflow: scroll;
`;

export const ScrollView = styled.ScrollView`
    min-height: 100%;
    background-color: #5599FF;
`;