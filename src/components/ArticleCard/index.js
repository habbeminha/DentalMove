import React from 'react'
import { Container, ArticleTitle, ArticleHeader, ArticleAuthor } from './styles.js'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { TouchableOpacity } from 'react-native'

const ArticleCard = (props) => {
    return(
        <Container>
            <ArticleHeader>
                <ArticleTitle>
                    {props.title}
                </ArticleTitle>
                <TouchableOpacity onPress={props.save}>
                {props.saved ?
                    <AiFillHeart color='red' size='1.6rem'/> :
                    <AiOutlineHeart size='1.6rem' /> }
                </TouchableOpacity>
            </ArticleHeader>
            <ArticleAuthor>
                {props.author}
            </ArticleAuthor>
        </Container>
    )
}

export default ArticleCard;