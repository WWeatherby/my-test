import { initializeIcons } from '@fluentui/react';
import React from 'react';
import './App.css';
import SearchName from './searchName';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQDU4CkSbjhKMdcMhqSq1C3Sv0ttmq0Y",
  authDomain: "wil-test-8b59e.firebaseapp.com",
  projectId: "wil-test-8b59e",
  storageBucket: "wil-test-8b59e.appspot.com",
  messagingSenderId: "1005667098483",
  appId: "1:1005667098483:web:6a35d09bf4f751a518af06"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeIcons();

function App() {
  return (
    <div className="App">
      <SearchName />
    </div>
  );
}

export default App;
