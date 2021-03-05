import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import ArticleCard from '../../components/ArticleCard';
import ArticlePage from '../ArticlePage';
import PageContainer from '../../components/PageContainer';

const savedArticles = [{
    title: "Artigo numero um muito legal", author:"Igor Taquary, Laura Habbema", saved:'true'
}, {
    title:"Primeiros socorros em traumas dentais causados por atividades esportivas: estado de conhecimento, tratamento e prevenção", 
    author:"Paul Piccininni , Anthony Clough , Ray Padilla , Gabriella Piccininni ",
    content: "Lesões dentárias e orais, o tipo mais comum de lesões orofaciais, são freqüentemente sofridas por atletas que praticam esportes de contato; na verdade, eles representam o tipo mais frequente de lesão esportiva. Um dente que tenha sido perdido por trauma esportivo pode ser recolocado se guardado em meio próprio para isso, exemplos são leite, solução salina estéril ou mesmo saliva! Além disso, procurar o dentista o quanto antes melhora as chances de que não hajam complicações e se possa recolocar o dente! Por isso, ao sofrer um acidente como esses procure o dentista do seu clube e conscientize o resto do seu time ou integrantes da academia ou clube ao qual vc pertence para que sejam tomadas as corretas providências :)",
    articleDate: "2010-05-01",
    link: "https://www.google.com",
}]

const SavedArticlesPage = () => {

    const [showArticle, setShowArticle] = useState('');

    return(
    savedArticles ? 

        showArticle ? 
            ( <ArticlePage article={showArticle} goBack={() => setShowArticle('')}/> )
            :
            (<PageContainer>
                <View style={{width: '100%'}}>
                    <Text style={{textAlign: 'right', fontWeight: 'bold'}}>{savedArticles.length} artigos salvos</Text>
                </View>
                {savedArticles.map( (article) => 
                <ArticleCard title={article.title} author={article.author} saved={article.saved} onPress={() => setShowArticle(article)}/>)}
            </PageContainer> )
        :
        <PageContainer>
            <View style={{marginTop: '5rem', width: '80%'}}>
                <Text style={{textAlign: 'center', color: 'grey'}}>
                    Aqui você irá encontrar os seus artigos favoritos. <br />
                    Explore novos artigos e salve-os para encontrá-los aqui!
                </Text>
            </View>
        </PageContainer>   
    )
};

export default SavedArticlesPage;