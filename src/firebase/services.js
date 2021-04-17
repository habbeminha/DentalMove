import { Alert } from 'react-native';
import {firebase, db} from './config';
import {getDevicePushToken} from './notification-services';

var tags = [];
var user = {};
var allArticles = [];           // Articles data (objects)
var recommendedArticles = [];   // Articles data (objects)
var localSavedArticles = [];    // Articles Id only (strings)
var localReadArticles = [];     // Articles Id only (strings)

// Authentication 
export const login = async (email, password, navigation) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await getUserData();
        navigation.navigate('MainPages');
    }
    catch(error){ Alert.alert(error) }
}

export const createNewUser = async (email, username, password, type, interests, navigation) => {
    //console.log({email, username, password, type, interests})
    const pushToken = await getDevicePushToken();
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                username,
                type,
                interests,
                pushToken: ( pushToken.data ? pushToken : null )
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    user = data;
                    Alert.alert('Cadastro realizado com sucesso');
                    navigation.navigate('MainPages');
                })
                .catch((error) => {
                    Alert.alert(error);
                    navigation.navigate('Home');
                });
        })
        .catch((error) => {
            Alert.alert(error);
        });
}

export async function forgotPassword(email, navigation){
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

export async function passwordReset(code, password, navigation){
    firebase.auth().confirmPasswordReset
    firebase.auth().confirmPasswordReset(code, password)
    .then( () => {

    })
}

export async function getUserData(){
    if(Object.keys(user).length === 0){
        const userId = firebase.auth().currentUser.uid;
        const usersRef = db.collection('users');
        const doc = await usersRef.doc(userId).get();
        if (!doc.exists) {
            console.log('No matching documents.');
            return {};
        }
        user = doc.data();
        const pushToken = await getDevicePushToken();
        console.log("getuserData -> pushToken: ");
        console.log(pushToken);
        if(user.pushToken !== pushToken){
            await usersRef.doc(userId).update({pushToken: pushToken})
        }
        localSavedArticles = user.savedArticles ? user.savedArticles : [];
        localReadArticles = user.readArticles ? user.readArticles : [];
    }
    return user;
}

export async function getRecommendedArticles(){
    await getUserData();
    if( recommendedArticles.length === 0){
        const articles = await getAllArticles();
        articles.forEach( article => {
            if(article.tags.includes(user.type)){
                article.tags.forEach( tag => {
                    if(user.interests.includes(tag)){
                        recommendedArticles.push(article);
                    }
                })
            }
        })
    }
    return recommendedArticles;
}

export async function getAllArticles(){
    if(allArticles.length === 0){
        console.log('GET ON FIREBASE');
        const articlesRef = db.collection('posts');
        const snapshot = await articlesRef.get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return [];
        }
        snapshot.forEach(doc => {
            allArticles.push({id: doc.id, ...doc.data()})
          });
    }
    return allArticles
}

export async function getTags(){
    /* if(tags.length === 0){
        const tagsRef = db.collection('tags');
        const snapshot = await tagsRef.get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return [];
        }
        snapshot.forEach(doc => {
            tags.push(doc.data().name)
          });
    } */
    if(tags.length === 0){
        tags = [
            'Esportes individuais: lutas, corrida, ciclismo, entre outros',
            'Esportes aquáticos: natação, surfe, entre outros', 
            'Esportes coletivos: handebol, futebol, basquete, entre outros',
        ]
        if(user.type === 'Atletas'){
            tags = tags.concat([
                'Alimentação e erosão dental', 'Protetor Bucal',
                'Traumatismos orofaciais no esporte', 'Relação equilíbrio, oclusão e esporte'
            ])
        }
        if(user.type === 'Profissionais da Saúde'){
            tags = tags.concat([
                'Protocolos para erosão dental', 'Protocolos para Dopping', 
                'Protocolos para protetores bucais', 'Protocolos para tratamento de DTM' 
            ])
        }
    }
    return tags
}

export function getUsername(){
    if(user.username) return user.username;
    return null;
}

export function toggleSavedArticle(articleId){
    localSavedArticles &&
    localSavedArticles.includes(articleId) ? 
    (
        localSavedArticles = localSavedArticles.filter( value => value !== articleId)
    ) : (
        localSavedArticles.push(articleId)
    )
}

export function isSaved(articleId){
    if(localSavedArticles){
        return localSavedArticles.includes(articleId) 
    }
    return false;
}

export function getSavedArticles(){
    if(localSavedArticles.length < 0){ return [] };

    const auxsa = [];
    allArticles.forEach( article => {
        if(localSavedArticles.includes(article.id)){
            auxsa.push(article);
        }
    })
    return auxsa
}

export function getArticlesByTag(tagName){
    const auxsa = [];
    allArticles.forEach( article => {
        if(article.tags.includes(tagName)){
            auxsa.push(article);
        }
    })
    return auxsa
}

export function getSavedArticlesNum(){
    return localSavedArticles.length;
}

export async function logOut(navigation){
    await syncData();
    await firebase.auth().signOut();
    tags = [];
    user = {};
    allArticles = [];       
    recommendedArticles = [];
    localSavedArticles = []; 
    localReadArticles = [];
    navigation.navigate('Home');
}

export async function getArticlebyId(id){
    await getAllArticles();
    let auxa = null;
    allArticles.forEach( article => {
        if(article.id === id){
            auxa = article;
        }
    })
    return auxa;
}

export async function syncData(){
    // Syncronize local saved and read articles data with firebase
    if(firebase.auth().currentUser && firebase.auth().currentUser.uid === user.id){
        const userRef = db.collection('users').doc(user.id)
        try {
            await userRef.update({savedArticles: localSavedArticles, readArticles: localReadArticles});
            console.log('data sync');
        } catch (error) {
            console.log(error);
        }
    }
}

export function toggleReadArticle(articleId){
    localReadArticles &&
    localReadArticles.includes(articleId) ? 
    (
        localReadArticles = localReadArticles.filter( value => value !== articleId)
    ) : (
        localReadArticles.push(articleId)
    )
}

export function isRead(articleId){
    if(localReadArticles){
        return localReadArticles.includes(articleId) 
    }
    return false;
}

export function getReadArticlesNum(){
    return localReadArticles ? localReadArticles.length : 0
}