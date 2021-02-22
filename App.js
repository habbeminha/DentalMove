import 'react-native-gesture-handler';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import ExplorePage from './src/pages/ExplorePage';
import AthletesPage from './src/pages/AthletesPage';
import { View } from 'react-native';

const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Roboto', sans-serif;
  }
`

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthPages = () => {
  return( 
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="Athletes" component={AthletesPage} />
    </Stack.Navigator> 
  )
}

const MainPages = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Explore" component={ExplorePage}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <GlobalStyle />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthPages" component={AuthPages}/>
        <Stack.Screen name="MainPages" component={MainPages}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

