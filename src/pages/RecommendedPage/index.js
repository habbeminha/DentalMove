import React, { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer'
import { View, Text } from 'react-native';
import ArticleCard from '../../components/ArticleCard';
import { getRecommendedArticles, getUsername } from '../../firebase/services';

const RecommendedPage = ({navigation}) => {

    const [username, setUsername] = useState();
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        const unsubscribe = navigation.addListener('focus', () => {
            const fetch = async () => {
                let auxun = await getUsername();
                setUsername(auxun);

                let auxra = await getRecommendedArticles();
                setArticles(auxra);
            }
            fetch();
        });
        return unsubscribe;
    }, [navigation, articles])

    return(
        <PageContainer>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Recomendados para { username || 'você'}!</Text>
            <View>
                {articles.map( (article, index) => 
                    <ArticleCard key={index} title={article.title} author={article.author} id={article.id} navigation={navigation}/>
                 )}
            </View>
        </PageContainer>
    )
};

export default RecommendedPage;