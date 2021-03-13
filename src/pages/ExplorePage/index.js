import React, {useEffect, useState} from 'react';
import PageContainer from '../../components/PageContainer';
import {Text, View} from 'react-native'
import CategoryCard from '../../components/CategoryCard';
import { getTags } from '../../firebase/services';

const ExplorePage = ({navigation}) => {

    const [tags, setTags] = useState([]);

    useEffect( () => {
        const fetch = async () => {
            let aux = await getTags();
            setTags(aux);
        }
        fetch();
    }, [tags])

    return(
        <PageContainer>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Encontre artigos por categoria</Text>
            <View>
                {tags.map( (elem, i) => 
                    <CategoryCard key={i} title={elem} navigation={navigation}/>
                )}
            </View>
        </PageContainer>
    )
}

export default ExplorePage;