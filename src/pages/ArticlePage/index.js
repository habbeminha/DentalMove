import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import GoBackButton from '../../components/GoBackButton';
import PageContainer from '../../components/PageContainer';
import {ArticleTitle, ArticleAuthor, ArticleContent, ArticleLinkButton} from './styles';
import { AntDesign } from '@expo/vector-icons'

const ArticlePage = (props) => {

    const article = props.article;

    return(
        <PageContainer>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
            justifyContent: 'space-between', width: '100%'}}>
                <GoBackButton goBack={props.goBack}/>
                <TouchableOpacity onPress={props.save}>
                {props.saved ?
                    <AntDesign name="heart" size={24} color="red" /> :
                    <AntDesign name="hearto" size={24} color="black" /> }
                </TouchableOpacity>
            </View>
            <ArticleTitle>
                {article.title}
            </ArticleTitle>
            <ArticleAuthor>
                {article.author}
            </ArticleAuthor>
            <ArticleContent>
                {article.content}
            </ArticleContent>
            <ArticleLinkButton onPress={ () => Linking.openURL(article.link)}>
                Leia o artigo inteiro
            </ArticleLinkButton>
        </PageContainer>
    )
};

export default ArticlePage;