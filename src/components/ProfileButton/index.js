import React from 'react';
import { TouchableOpacity} from 'react-native';
import { BiUserCircle } from 'react-icons/bi'

const ProfileButton = () => {
    return(
        <TouchableOpacity onPress={ () => {}}
            style={{margin: 'auto 2rem', width:'2.8rem'}}>
            <BiUserCircle color='white' size='2.2rem'/>
        </TouchableOpacity>
    )
}

export default ProfileButton;