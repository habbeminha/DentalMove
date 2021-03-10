import React from 'react'
import { Container, ArticleTitle, ArticleHeader, ArticleAuthor } from './styles.js'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const ArticleCard = (props) => {
    return(
        <Container onPress={props.onPress}>
            <ArticleHeader>
                <ArticleTitle>
                    {props.title}
                </ArticleTitle>
                <TouchableOpacity onPress={props.save}>
                {props.saved ?
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