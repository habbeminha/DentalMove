import React, {createContext, useState} from "react";
import { Alert } from 'react-native';
import { firebase, db } from './config';
import { getDevicePushToken, dailyNotifications, welcomeNotifications, cancelAllScheduledNotifications, savingNotification, challengeNotification } from './notification-services';

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [user, setUser] = useState();

    const login = async (email, password, navigation) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password);
            await getUserData();
            navigation.navigate('MainPages');
        }
        catch(error){ Alert.alert(error) }
    }

    const createNewUser = async (email, username, password, type, interests, navigation) => {
        //console.log({email, username, password, type, interests})
        const pushToken = await getDevicePushToken();
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                username,
                type,
                interests,
                pushToken: ( pushToken.data ? pushToken : null )
            };
            const usersRef = firebase.firestore().collection('users');
            await usersRef.doc(uid).set(data); 

            user = data;
            Alert.alert('Cadastro realizado com sucesso');
            navigation.navigate('MainPages');
            
            await cancelAllScheduledNotifications();
            dailyNotifications(); // set daily notifications
            welcomeNotifications();
            
        } catch (error) {
            Alert.alert(error);
            navigation.navigate('Home');
        }
    }

    async function forgotPassword(email, navigation){
        const emailResult = await firebase.auth().fetchSignInMethodsForEmail(email);
        if(emailResult.length !== 0){
            firebase.auth().sendPasswordResetEmail(email)
            .then( () => {
                Alert.alert('Um link para alteração da senha foi enviado para seu email.');
                navigation.navigate('Home');
            })
            .catch((e) => {
                console.log(e)
                Alert.alert(e);
                navigation.navigate('Home');
            })
        } else {
            Alert.alert('Email não encontrado');
        }
    }

    async function passwordReset(code, password, navigation){
        firebase.auth().confirmPasswordReset
        firebase.auth().confirmPasswordReset(code, password)
        .then( () => {

        })
    }

    async function getUserData(){
        if(Object.keys(user).length === 0){
            const userId = firebase.auth().currentUser.uid;
            const usersRef = db.collection('users');
            const doc = await usersRef.doc(userId).get();
            if (!doc.exists) {
                console.log('No matching documents.');
                return {};
            }
            setUser(doc.data());
            const pushToken = await getDevicePushToken();
            await cancelAllScheduledNotifications();
            dailyNotifications();
            if(user.pushToken !== pushToken){
                await usersRef.doc(userId).update({pushToken: pushToken})
            }
            localSavedArticles = user.savedArticles ? user.savedArticles : [];
            localReadArticles = user.readArticles ? user.readArticles : [];
        }
        return user;
    }

    return (
    <AuthContext.Provider
        value={{
            login,
            createNewUser,
            getUserData,
            passwordReset, 
            forgotPassword,
        }} >
        <>{props.children}</>
    </AuthContext.Provider>)
}

export default AuthProvider;