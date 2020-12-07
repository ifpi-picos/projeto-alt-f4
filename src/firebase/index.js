import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBmqsO94Y51nrhUcLtWe8vMzc-aAFWgyC8',
  authDomain: 'radical-dreamers-2020.firebaseapp.com',
  projectId: 'radical-dreamers-2020',
  storageBucket: 'radical-dreamers-2020.appspot.com',
  messagingSenderId: '304984348408',
  appId: '1:304984348408:web:f0c369e162e59e7d0ecd0d'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
