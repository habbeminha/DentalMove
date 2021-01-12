import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
    width: 100%;
    padding: 10px 20px;
    margin-top: 25px;
    color: #939393; 
    font-size: 1 rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    :focus{
        border: none;
        outline: none;
    }
    
`;