import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import PageContainer from '../../components/PageContainer';
import { getArticlesByTag } from '../../firebase/services';
import ArticleCard from '../../components/ArticleCard';

const ExploreArticlesPage = ({navigation, route}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticlesByTag(route.params.tag)
            .then( res => setArticles(res));
    }, [])

    return(
        <PageContainer> 
            { articles.length > 0 ? 
                articles.map( (article, index) => 
                <ArticleCard key={index} title={article.title} author={article.author} 
                    id={article.id} navigation={navigation} />
                ) :
                <View style={{marginTop: 50, width: '80%'}}>
                    <Text style={{textAlign: 'center', color: 'grey'}}>
                        Não encontramos nenhum artigo :(
                    </Text>
                </View>
            }
        </PageContainer>
    )
};

export default ExploreArticlesPage;