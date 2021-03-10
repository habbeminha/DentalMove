import React from 'react';
import { RadioContainer } from './styles';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const RadioOption = (props) => {
    return(
        <RadioContainer onPress={props.onPress}>
            {props.status === 'checked' ? 
                <MaterialIcons name="radio-button-on" size={24} color="white" /> :
                <MaterialIcons name="radio-button-off" size={24} color="white" /> 
            }
            <Text style={{color: '#FFF', fontWeight: 'bold', marginLeft: 5,
            display: 'flex', flexWrap: 'wrap'}}>{props.title}</Text>
        </RadioContainer>
    )
}

export default RadioOption;