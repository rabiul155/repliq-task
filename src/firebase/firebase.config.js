// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAr224ODsKRgL4F4vIg3psh5FmxuCoe9A0",
    authDomain: "repliq-task-c4d42.firebaseapp.com",
    projectId: "repliq-task-c4d42",
    storageBucket: "repliq-task-c4d42.appspot.com",
    messagingSenderId: "585437380757",
    appId: "1:585437380757:web:4bf2a736d5a204a3d11b9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;