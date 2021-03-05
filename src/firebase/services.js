import React, { createContext } from 'react';
import {firebase} from './config';

export const login = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("Os dados do usuário não foram encontrados");
                        return;
                    }
                    const user = firestoreDocument.data();
                    navigation.navigate('MainPages');
                    alert('Login realizado com sucesso');
                })
                .catch(error => {
                    alert("Não foi possivel realizar o login. \n Verifique o email e/ou a senha!")
                });
        })
        .catch(error => {
            alert(error)
        })
}

export const createNewUser = async (data) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                username,
                password,
                type,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    alert('Cadastro realizado com sucesso')
                    //navigation.navigate('Home', {user: data});
                })
                .catch((error) => {
                    alert(error);
                });
        })
        .catch((error) => {
            alert(error);
        });
}

export function toggleSavedArticle(articleId){
    
}

export function isSavedArticle(articleId){

}