import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import GoBackButton from '../../components/GoBackButton';
import PageContainer from '../../components/PageContainer';
import {ArticleTitle, ArticleAuthor, ArticleContent, ArticleLinkButton} from './styles';

const ArticlePage = (props) => {

    const article = props.article;

    return(
        <PageContainer>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
            justifyContent: 'space-between', width: '100%'}}>
                <GoBackButton goBack={props.goBack}/>
                <TouchableOpacity onPress={props.save}>
                {/* {props.saved ?
                    <AiFillHeart color='red' size='1.6em'/> :
                    <AiOutlineHeart size='1.6em' /> } */}
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