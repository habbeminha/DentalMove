import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap; 
    justify-content: space-between;
    border: 1px solid #5599FF;
    padding: 8px;
    margin-top: 10px;
    width: 350px;
    //height: 100px;
    //overflow-y: scroll;
`;

export const ArticleHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ArticleTitle = styled.Text`
    font-weight: bold;
    font-size: 1rem;
    width: 85%;
`;

export const ArticleAuthor = styled.Text`
    
`;