import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import ArticleCard from '../../components/ArticleCard';
import ArticlePage from '../ArticlePage';
import PageContainer from '../../components/PageContainer';
import { getSavedArticles } from '../../firebase/services';

const SavedArticlesPage = ({navigation}) => {

    const [showArticle, setShowArticle] = useState(false);
    const [savedArticles, setSavedArticles] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            const auxsa = await getSavedArticles();
            setSavedArticles(auxsa);
        });
        return unsubscribe;
    }, [navigation])

    return(
    savedArticles.length > 0 ? 

        showArticle ? 
            ( <ArticlePage article={showArticle} goBack={() => setShowArticle('')}/> )
            :
            (<PageContainer>
                <View style={{width: '100%'}}>
                    <Text style={{textAlign: 'right', fontWeight: 'bold'}}>{savedArticles.length} artigos salvos</Text>
                </View>
                {savedArticles.map( (article, index) => 
                    <ArticleCard key={index} title={article.title} author={article.author} 
                    id={article.id} navigation={navigation} onPress={() => setShowArticle(article)}/>)
                }
            </PageContainer> )
        :
        <PageContainer>
            <View style={{marginTop: 50, width: '80%'}}>
                <Text style={{textAlign: 'center', color: 'grey'}}>
                    Aqui você irá encontrar os seus artigos favoritos.
                    Explore novos artigos e salve-os para encontrá-los aqui!
                </Text>
            </View>
        </PageContainer>   
    )
};

export default SavedArticlesPage;