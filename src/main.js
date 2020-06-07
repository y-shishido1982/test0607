import Vue from 'vue'
import App from './App.vue'
import router from './router'



// ここから追加
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)



// ここから追加
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyCWxz681mQHuviOpd2ZaH4u-6Ezm5v9MhQ",
  authDomain: "profirebase0601.firebaseapp.com",
  databaseURL: "https://profirebase0601.firebaseio.com",
  projectId: "profirebase0601",
  storageBucket: "profirebase0601.appspot.com",
  messagingSenderId: "986351647581",
  appId: "1:986351647581:web:7f94fe4dbf560d7e0dc6b4"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
// ここまで追加













Vue.component('fa', FontAwesomeIcon)
// ここまで追加











Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
