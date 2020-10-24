import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAQqZtFcAZnRYBKAqUYQTWFQGFIfOJSaaY',
    authDomain: 'coffeeproject-746c2.firebaseapp.com',
    databaseURL: 'https://coffeeproject-746c2.firebaseio.com',
    projectId: 'coffeeproject-746c2',
    storageBucket: 'coffeeproject-746c2.appspot.com',
    messagingSenderId: '798461664708',
    appId: '1:798461664708:web:011c4867b93f5893235891',
    measurementId: 'G-L3JF39KE6D',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
