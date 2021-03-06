import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, Title} from './styles';

const CategoryCard = (props) => {
    return(
        <Container onPress={ () => props.navigation.navigate('ExploreArticles', {tag: props.title})}>
            {props.icon}
            <Title>
                {props.title}
            </Title>
        </Container>
    )
};

export default CategoryCard;