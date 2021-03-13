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
import RecommendedPage from './src/pages/RecommendedPage';

import { Image, StatusBar } from 'react-native';
import {useFonts} from '@expo-google-fonts/dev'
import ChallengesPage from './src/pages/ChallengesPage';
import ExploreArticlesPage from './src/pages/ExploreArticlesPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthPages = () => {
  return( 
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
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
      screenOptions={ ({navigation, route}) => ({  
        headerShown: true, 
        headerTintColor: '#FFF', 
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold', }, 
        headerStyle:{ backgroundColor: '#5599FF'},
        headerRight: () => <ProfileButton navigation={navigation} />  
      }) 
    }>
      <Drawer.Screen name="Recommended" component={RecommendedPage} options={{ title: 'Artigos Recomendados'}} />
      <Drawer.Screen name="Explore" component={ExplorePage} options={{ title: 'Explorar Artigos' }}/>
      <Drawer.Screen name="Challenges" component={ChallengesPage} options={{ title: 'Desafios' }}/>
      <Drawer.Screen name="Saved" component={SavedArticlesPage} options={{ title: 'Artigos Salvos' }}/>
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  useFonts({'Bungee_400Regular': require('./assets/Bungee-Regular.ttf') });
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="DENTAL MOVE"
        inactiveTintColor='#FFF'
        inactiveBackgroundColor='#5599FF'
        icon={ () => <Image source={dente} style={{height: 30, width: 30}}/>} 
        style={{
          borderRadius: 5, margin: 0, marginBottom: 10, padding: 10
        }}
        labelStyle={{
          margin: -10, padding: 0, fontFamily: 'Bungee_400Regular', fontSize: 20
        }}
        onPress={ () => props.navigation.closeDrawer()}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={ () => props.navigation.navigate('AuthPages')}
      />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle='light-content' hidden={false} />
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false}} >
        <Stack.Screen name="AuthPages" component={AuthPages}/>
        <Stack.Screen name="MainPages" component={MainPages}/>
        <Stack.Screen name="ExploreArticles" component={ExploreArticlesPage} options={{headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

