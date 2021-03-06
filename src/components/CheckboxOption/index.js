import React from 'react';
import { Checkbox } from 'react-native-paper';
import { RadioContainer } from './styles';
import { Text } from 'react-native';

const CheckboxOption = (props) => {
    return(
        <RadioContainer>
            <Checkbox color='#FFF' uncheckedColor='#FFF'
             onPress={props.onPress} status={props.checked ? 'checked' : 'unchecked'} />
            <Text style={{color: '#FFF', fontWeight: 'bold', 
            display: 'flex', flexWrap: 'wrap'}}>{props.title}</Text>
        </RadioContainer>
    )
}

export default CheckboxOption;