import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createGlobalStyle } from 'styled-components';
//import {  createSwitchNavigator, createAppContainer } from 'react-navigation'; 
import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';

const GlobalStyle = createGlobalStyle `
  
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
    font-family: 'Roboto', sans-serif;
  }

`

const App = () => {
  return(
    <SignUpPage />
  )
}

export default App;




