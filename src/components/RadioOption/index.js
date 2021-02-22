import React from 'react';
import { RadioButton } from 'react-native-paper';
import { RadioContainer } from './styles';
import { Text } from 'react-native';

const RadioOption = (props) => {
    return(
        <RadioContainer>
            <RadioButton color='#FFF' uncheckedColor='#FFF'
             onPress={props.onPress} status={props.status} />
            <Text style={{color: '#FFF', fontWeight: 'bold', 
            display: 'flex', flexWrap: 'wrap'}}>{props.title}</Text>
        </RadioContainer>
    )
}

export default RadioOption;