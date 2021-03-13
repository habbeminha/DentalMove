import {firebase, db} from './config';

var tags = [];
var user = {};
var allArticles = [];           // Articles data (objects)
var recommendedArticles = [];   // Articles data (objects)
var localSavedArticles = [];    // Articles Id only (strings)
var localReadArticles = [];     // Articles Id only (strings)

export const login = async (email, password, navigation) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await getUserData();
        navigation.navigate('MainPages');
    }
    catch(error){ alert(error) }
}

export const createNewUser = async (email, username, password, type, interests, navigation) => {
    //console.log({email, username, password, type, interests})
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                username,
                password,
                type,
                interests
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    user = data;
                    alert('Cadastro realizado com sucesso');
                    navigation.navigate('MainPages');
                })
                .catch((error) => {
                    alert(error);
                    navigation.navigate('Home');
                });
        })
        .catch((error) => {
            alert(error);
        });
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
    }
    return user;
}

export async function getRecommendedArticles(){
    await getUserData();
    if( recommendedArticles.length === 0){
        const articles = await getAllArticles();
        articles.forEach( article => {
            article.tags.forEach( tag => {
                if(user.interests.includes(tag)){
                    recommendedArticles.push(article);
                }
            })
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
    if(tags.length === 0){
        const tagsRef = db.collection('tags');
        const snapshot = await tagsRef.get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return [];
        }
        snapshot.forEach(doc => {
            tags.push(doc.data().name)
          });
    }
    return tags
}

export function getUsername(){
    if(user.username) return user.username;
    return null;
}

export function toggleSavedArticle(articleId){
    localSavedArticles.includes(articleId) ? 
    (
        localSavedArticles = localSavedArticles.filter( value => value !== articleId)
    ) : (
        localSavedArticles.push(articleId)
    )
}

export function isSaved(articleId){
    console.log('Verificou')
    return localSavedArticles.includes(articleId) 
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
    tags = [];
    user = {};
    allArticles = [];       
    recommendedArticles = [];
    localSavedArticles = []; 
    localReadArticles = [];
    await firebase.auth().signOut();
    navigation.navigate('Home');
}