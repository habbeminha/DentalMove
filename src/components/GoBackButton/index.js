import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IoMdArrowBack } from 'react-icons/io'

const GoBackButton = (props) => {
    return(
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', margin: '5px', marginBottom: '10px',
            marginLeft: '0', alignSelf: 'flex-start', padding: '5px', borderRadius: '2px', alignItems: 'center',
            borderWidth: '1px'}} 
            onPress={props.goBack}>
            <IoMdArrowBack />
            <Text>
                VOLTAR
            </Text>
        </TouchableOpacity>
    )
};

export default GoBackButton;