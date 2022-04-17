// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyLMy7pMgJ72FFPS1EuRJTo__7R7rL4yE",
  authDomain: "ak-photographer.firebaseapp.com",
  projectId: "ak-photographer",
  storageBucket: "ak-photographer.appspot.com",
  messagingSenderId: "660800323455",
  appId: "1:660800323455:web:c9e3410ee27cb40573644a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth =getAuth(app)
export default auth;