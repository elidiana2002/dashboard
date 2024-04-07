import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu';
import Container from './Components/Container';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  

  apiKey: "AIzaSyDVVnNAFrBVB9rgQX9EmE3XG2OxcctOyvU",

  authDomain: "itecmonitor-4c7a4.firebaseapp.com",

  databaseURL: "https://itecmonitor-4c7a4-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "itecmonitor-4c7a4",

  storageBucket: "itecmonitor-4c7a4.appspot.com",

  messagingSenderId: "986508684655",

  appId: "1:986508684655:web:9fc4fd1d77a0aa41e8cc9a",

  measurementId: "G-4104DK695E"


};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);




function App() {
  return (
    <div className="App">
      <Menu />
      <Container />
    </div>
  );
}

export default App
