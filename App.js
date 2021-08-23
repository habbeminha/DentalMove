import 'react-native-gesture-handler';
import React, {useEffect, useRef, useState} from 'react';
import { AppState, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { logOut, syncData } from './src/firebase/services';
import { useFonts } from '@expo-google-fonts/dev';
import  dente  from './assets/dente.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignUpPage from './src/pages/SignUpPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import ExplorePage from './src/pages/ExplorePage';
import AthletesPage from './src/pages/AthletesPage';
import ProfileButton from './src/components/ProfileButton';
import SavedArticlesPage from './src/pages/SavedArticlesPage';
import ProfessionalsPage from './src/pages/ProfessionalsPage';
import RecommendedPage from './src/pages/RecommendedPage';
import ChallengesPage from './src/pages/ChallengesPage';
import ExploreArticlesPage from './src/pages/ExploreArticlesPage';
import ArticlePage from './src/pages/ArticlePage';
import ForgotPasswordPage from './src/pages/ForgotPassword';
import { testNotification } from './src/firebase/notification-services';

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
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} />
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
      }) }
      >
      <Drawer.Screen name="Explore" component={ExplorePage} options={{ title: 'Explorar Artigos' }}/>
      <Drawer.Screen name="Recommended" component={RecommendedPage} options={{ title: 'Artigos Recomendados'}} />
      <Drawer.Screen name="Saved" component={SavedArticlesPage} options={{ title: 'Artigos Salvos' }}/>
      <Drawer.Screen name="Challenges" component={ChallengesPage} options={{ title: 'Desafios' }}/>
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props) => {
  let [fontLoaded] = useFonts({'Bungee_400Regular': require('./assets/Bungee-Regular.ttf')});
  return ( !fontLoaded ? <></> :
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
        onPress={ async () => await logOut(props.navigation)}
      />
    </DrawerContentScrollView>
  );
}

const App = () => {

  const appState = useRef(AppState.currentState);
  const [userUid, setUserUid] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    AsyncStorage.getItem("user_uid")
      .then( value => {
        console.log("UID Storage >> " + value);
        setUserUid(value);
        setLoading(false);
      })
      .catch(e => setLoading(false));

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    } else {
      syncData();
    }

    appState.current = nextAppState;
    console.log("AppState", appState.current);
  };

  return loading ? <></> :
  ( <NavigationContainer>
      <StatusBar barStyle='light-content' hidden={false} />
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false}} 
        initialRouteName={userUid ? "MainPages" : "AuthPages"}>
        <Stack.Screen name="AuthPages" component={AuthPages}/>
        <Stack.Screen name="MainPages" component={MainPages}/>
        <Stack.Screen name="ExploreArticles" component={ExploreArticlesPage} 
          options={ ({route}) => ({ headerShown: true, headerTintColor: '#FFF', headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold'}, headerStyle:{ backgroundColor: '#5599FF'},
          headerTitle: route.params.tag, headerBackTitle: 'Voltar' })} />
        <Stack.Screen name="ArticlePage" component={ArticlePage} 
          options={ ({route}) => ({ headerShown: true, headerTintColor: '#FFF', headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold'}, headerStyle:{ backgroundColor: '#5599FF'},
          headerTitle: 'Artigo', headerBackTitle: 'Voltar' })} />
      </Stack.Navigator>
    </NavigationContainer> )
}

export default App;

