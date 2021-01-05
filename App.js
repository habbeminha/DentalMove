import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createGlobalStyle } from 'styled-components';


import HomePage from './src/pages/HomePage';

//import GlobalFonts from './MainIcon/fonts.js';
/*render() {
  return ( 
      <Wrapper> 
        
          <GlobalFonts />
  // ...
      </Wrapper>
  ); 
} */

const GlobalStyle = createGlobalStyle `
  
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
    font-family: 'Roboto', sans-serif;
  }

`

export default function App() {

  return (
    <>
    <GlobalStyle />
    <HomePage />
    </>
  );

}  


