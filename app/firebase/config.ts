import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Add your Firebase configuration object here
  // You can find this in your Firebase Console
  apiKey: "AIzaSyBn7fW1VyTCYpkLFZffUi1ztu6gXCl69CY",
  authDomain: "ricette-eff06.firebaseapp.com",
  databaseURL: "https://ricette-eff06-default-rtdb.firebaseio.com",
  projectId: "ricette-eff06",
  storageBucket: "ricette-eff06.appspot.com",
  messagingSenderId: "199341501866",
  appId: "1:199341501866:web:b3d33e039d6fc21e9d4fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

