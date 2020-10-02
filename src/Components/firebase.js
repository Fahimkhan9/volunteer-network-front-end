import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD-uFr3h6fKBLCknM8k8uQa_A4psRRrnjc",
    authDomain: "covid-19-tracker-c60ee.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-c60ee.firebaseio.com",
    projectId: "covid-19-tracker-c60ee",
    storageBucket: "covid-19-tracker-c60ee.appspot.com",
    messagingSenderId: "706428725197",
    appId: "1:706428725197:web:da7a9438b8e821b1388684",
    measurementId: "G-7H091M8LTZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export default auth 
  export {provider}