import React from 'react';
import { RadioButton } from 'react-native-paper';   //APAGAR DO PROJETO
import { RadioContainer } from './styles';
import { Text, View } from 'react-native';
import { BiRadioCircle, BiRadioCircleMarked} from 'react-icons/bi' //APAGAR DO PROJETO
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