import 'react-native-gesture-handler';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

