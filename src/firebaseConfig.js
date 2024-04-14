import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsYDdhVEYu78TQd74uLlkD8nQhIzuZ5O8",
  authDomain: "dream-homes-b756b.firebaseapp.com",
  projectId: "dream-homes-b756b",
  storageBucket: "dream-homes-b756b.appspot.com",
  messagingSenderId: "354958364109",
  appId: "1:354958364109:web:764dbdca975a120313c884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;