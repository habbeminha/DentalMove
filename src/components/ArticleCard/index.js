import React, { useEffect, useState } from 'react'
import { Container, ArticleTitle, ArticleHeader, ArticleAuthor } from './styles.js'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { isSaved, toggleSavedArticle } from '../../firebase/services.js'

const ArticleCard = (props) => {

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setSaved(isSaved(props.id))
        });
        return unsubscribe;
    }, [props.navigation])

    return(
        <Container onPress={props.onPress}>
            <ArticleHeader>
                <ArticleTitle>
                    {props.title}
                </ArticleTitle>
                <TouchableOpacity onPress={ () => {
                    toggleSavedArticle(props.id);
                    setSaved(isSaved(props.id));
                }}>
                {isSaved(props.id) || saved ?
                    <AntDesign name="heart" size={24} color="red" /> :
                    <AntDesign name="hearto" size={24} color="black" /> }
                </TouchableOpacity>
            </ArticleHeader>
            <ArticleAuthor>
                {props.author}
            </ArticleAuthor>
        </Container>
    )
}

export default ArticleCard;