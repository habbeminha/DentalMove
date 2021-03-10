import React from 'react';
import { TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const ProfileButton = () => {
    return(
        <TouchableOpacity onPress={ () => {}}
            style={{marginLeft: 'auto', marginRight: 10,  width: 32}}>
            <MaterialIcons name="bar-chart" size={32} color="white" />
        </TouchableOpacity>
    )
}

export default ProfileButton;