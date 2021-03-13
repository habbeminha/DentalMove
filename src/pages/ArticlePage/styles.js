import styled from "styled-components/native";

export const ArticleTitle = styled.Text`
    text-align: left;
    font-size: 24px;
    font-weight: bold;
`;

export const ArticleAuthor = styled.Text`
    text-align: left;
    font-size: 16px;
    color: grey;
`;

export const ArticleContent = styled.Text`
    text-align: left;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ArticleLinkButton = styled.Text`
    width: 100%;
    margin: 5px;
    padding: 5px;
    text-align: center;
    border-width: 1px;
    border-radius: 3px;
    border-color: #5599FF;
    color: #5599FF;
    font-weight: bold;
`;

export const ReadButton = styled.Text`
    background-color: ${(props) => props.active ? '#129512' : 'transparent'};
    color: ${(props) => props.active ? 'white' : '#129512'};
    border-color: #129512;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    font-weight: bold;
    padding: 4px;
    overflow: hidden;
`;