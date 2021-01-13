import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtBjwtNGeHOMEJtqp6VyiKwt06drh0BFI",
  authDomain: "dentalmove-6518b.firebaseapp.com",
  projectId: "dentalmove-6518b",
  storageBucket: "dentalmove-6518b.appspot.com",
  messagingSenderId: "309711858372",
  appId: "1:309711858372:web:0ade88b86d2db17862f791"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };