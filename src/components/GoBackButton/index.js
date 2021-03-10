import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const GoBackButton = (props) => {
    return(
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', margin: 5, marginBottom: 10,
            marginLeft: 0, alignSelf: 'flex-start', padding: 5, borderRadius: 2, alignItems: 'center',
            borderWidth: 1}} 
            onPress={props.goBack}>
            <MaterialIcons name='arrow-back' size={24} color="black"/>
            <Text>
                VOLTAR
            </Text>
        </TouchableOpacity>
    )
};

export default GoBackButton;