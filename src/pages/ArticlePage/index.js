import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Linking, Text } from 'react-native';
import GoBackButton from '../../components/GoBackButton';
import PageContainer from '../../components/PageContainer';
import {ArticleTitle, ArticleAuthor, ArticleContent, ArticleLinkButton, ReadButton} from './styles';
import { AntDesign } from '@expo/vector-icons'
import { getArticlebyId, isRead, isSaved, toggleSavedArticle, toggleReadArticle } from '../../firebase/services';

const article = {title: 'teste', author: 'teste'}

const ArticlePage = ({navigation, route}) => {

    const [article, setArticle] = useState();
    const [saved, setSaved] = useState(isSaved(route.params.id));
    const [read, setRead] = useState(isRead(route.params.id));

    useEffect( () => {
        const fetch = async () => {
            const auxa = await getArticlebyId(route.params.id);
            setArticle(auxa);
            setSaved(isSaved(route.params.id));
        }
        fetch();
    }, [])

    return(
        article ? (
        <PageContainer>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
            justifyContent: 'space-between', width: '100%', marginBottom: 15}}>
                <ReadButton active={read} onPress={ () => {
                    toggleReadArticle(route.params.id);
                    setRead(!read)
                }}>
                    {read ? "Artigo lido!" : "Marcar como lido" }
                </ReadButton>
                <TouchableOpacity onPress={ () => {
                    toggleSavedArticle(route.params.id);
                    setSaved(!saved);
                }}>
                {saved ?
                    <AntDesign name="heart" size={26} color="red" /> :
                    <AntDesign name="hearto" size={26} color="black" /> }
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
                { article.link.length > 4 &&
                    <ArticleLinkButton onPress={ () => Linking.openURL(article.link)}>
                        Leia o artigo inteiro
                    </ArticleLinkButton> }
                </PageContainer>
                ) :
                <PageContainer>
                    <View style={{marginTop: 50, width: '80%'}}>
                        <Text style={{textAlign: 'center', color: 'grey'}}>
                            Não conseguimos encontrar esse artigo :(
                        </Text>
                    </View>
                </PageContainer>  
    )
};

export default ArticlePage;