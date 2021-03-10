import React from 'react';
import PageContainer from '../../components/PageContainer';
import {Text, View} from 'react-native'
import CategoryCard from '../../components/CategoryCard';

const categorys = [ 'Profissionais da Saúde',
                    'Protocolos para erosão dental',
                    'Esportes individuais: lutas, corrida, ciclismo, entre outros',
                    'Protocolos para Dopping']

const ExplorePage = () => {
    return(
        <PageContainer>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Encontre artigos por categoria</Text>
            <View>
                {categorys.map( (elem, i) => 
                    <CategoryCard key={i} title={elem} />
                )}
            </View>
        </PageContainer>
    )
}

export default ExplorePage;