import React from 'react';
import { RadioContainer } from './styles';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CheckboxOption = (props) => {
    return(
        <RadioContainer onPress={props.onPress}>
            {props.checked ? 
                <MaterialIcons name="check-box" size={24} color="white" /> :
                <MaterialIcons name="check-box-outline-blank" size={24} color="white" />
            }
            <Text style={{color: '#FFF', fontWeight: 'normal', fontSize: 16,
            display: 'flex', flexWrap: 'wrap', marginLeft: 5}}>{props.title}</Text>
        </RadioContainer>
    )
}

export default CheckboxOption;