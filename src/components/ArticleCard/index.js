import React from 'react'
import { Container, ArticleTitle, ArticleHeader, ArticleAuthor } from './styles.js'
import { TouchableOpacity } from 'react-native'

const ArticleCard = (props) => {
    return(
        <Container onPress={props.onPress}>
            <ArticleHeader>
                <ArticleTitle>
                    {props.title}
                </ArticleTitle>
                <TouchableOpacity onPress={props.save}>
                {/* {props.saved ?
                    <AiFillHeart color='red' size='24px'/> :
                    <AiOutlineHeart size='24px' /> } */}
                </TouchableOpacity>
            </ArticleHeader>
            <ArticleAuthor>
                {props.author}
            </ArticleAuthor>
        </Container>
    )
}

export default ArticleCard;