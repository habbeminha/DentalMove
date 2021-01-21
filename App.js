import 'react-native-gesture-handler';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import AtletasPage from './src/pages/AtletasPage';


const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
  }
`

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <GlobalStyle />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="AtletasPage" component={AtletasPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

