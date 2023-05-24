import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const config = {
  apiKey: "AIzaSyDrazuQq4eR3-HMD6WHJDlLmmhqUoqV9bY",
  authDomain: "travel-wings-10137.firebaseapp.com",
  projectId: "travel-wings-10137",
  storageBucket: "travel-wings-10137.appspot.com",
  messagingSenderId: "783160790627",
  appId: "1:783160790627:web:d737c59b5e84940de93256",
  measurementId: "G-QYJGBXRY75"
};

const fireaseApp = initializeApp(config);

export default fireaseApp;