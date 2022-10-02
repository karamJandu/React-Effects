import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUuit6yDyM9TPRKBpl_O5C44TX_qPsPzU",
  authDomain: "my-react-72e3c.firebaseapp.com",
  projectId: "my-react-72e3c",
  storageBucket: "my-react-72e3c.appspot.com",
  messagingSenderId: "986887193180",
  appId: "1:986887193180:web:01a0d10a7285a1bf601c99",
};

// Initialize firebase

const initFirebase = () => initializeApp(firebaseConfig);

export default initFirebase;
