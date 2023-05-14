import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDgK2U35AF3cdNCd_uAfbp60taCNc5Z0Q",
    authDomain: "learing-app-4249d.firebaseapp.com",
    projectId: "learing-app-4249d",
    storageBucket: "learing-app-4249d.appspot.com",
    messagingSenderId: "613795636545",
    appId: "1:613795636545:web:1c408bf131889ad536adc0"
};

export default firebase.initializeApp(firebaseConfig);