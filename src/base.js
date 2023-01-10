import firebase from "firebase/app"
import Rebase from "re-base"
import "firebase/database"

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyAcUs1VQFES0XpjpYjfTUOn9cBMSp3POUQ",
   authDomain: "mon-chatbox-app.firebaseapp.com",
   databaseURL: "https://mon-chatbox-app-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base

