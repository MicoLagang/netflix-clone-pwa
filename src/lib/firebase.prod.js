import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBOVJhpW26pvh8YN2YsIUzmKBGSrG_f6Z8",
  authDomain: "netflix-clone-pwa.firebaseapp.com",
  databaseURL: "https://netflix-clone-pwa.firebaseio.com",
  projectId: "netflix-clone-pwa",
  storageBucket: "netflix-clone-pwa.appspot.com",
  messagingSenderId: "438584654535",
  appId: "1:438584654535:web:f63af62ca1d8ad0fecdce2"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
