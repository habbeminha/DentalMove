import 'react-native-gesture-handler';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import  dente  from './assets/dente.png';
import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import ExplorePage from './src/pages/ExplorePage';
import AthletesPage from './src/pages/AthletesPage';
import ProfileButton from './src/components/ProfileButton';
import SavedArticlesPage from './src/pages/SavedArticlesPage';
import ProfessionalsPage from './src/pages/ProfessionalsPage';

import { Image } from 'react-native';
import {useFonts, Bungee_400Regular} from '@expo-google-fonts/dev'

/* const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Roboto', sans-serif;
    }
`; */

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthPages = () => {
  return( 
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="Athletes" component={AthletesPage} />
      <Stack.Screen name="Professionals" component={ProfessionalsPage} />
    </Stack.Navigator> 
  )
}

const MainPages = () => {
  return(
    <Drawer.Navigator 
      drawerContent={ (props) => <CustomDrawerContent {...props}/> }
      screenOptions={{  headerShown: true, headerTintColor: '#FFF', headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold', }, headerStyle:{ backgroundColor: '#5599FF'},
      headerRight: (props) => <ProfileButton />  }}>

      <Drawer.Screen name="Saved" component={SavedArticlesPage} options={{ title: 'Artigos Salvos' }}/>
      <Drawer.Screen name="Explore" component={ExplorePage} options={{ title: 'Explorar Artigos' }}/>
      
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  useFonts({Bungee_400Regular});
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="DENTAL MOVE"
        inactiveTintColor='#FFF'
        inactiveBackgroundColor='#5599FF'
        icon={ () => <Image source={dente} style={{height: 30, width: 30}}/>} 
        style={{
          borderRadius: 0, margin: 0, marginTop: -5, marginBottom: 10, padding: 1
        }}
        labelStyle={{
          margin: 0, padding: 0, fontFamily: 'Bungee_400Regular', fontSize: 24
        }}
        onPress={ () => props.navigation.closeDrawer()}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fechar"
        onPress={ () => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      {/* <GlobalStyle /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthPages" component={AuthPages}/>
        <Stack.Screen name="MainPages" component={MainPages}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

