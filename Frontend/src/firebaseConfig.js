import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDIOJZRsfIsnslDkSIiIflh8JMZQjgEKfU",
    authDomain: "gyanchakkhu-b9b48.firebaseapp.com",
    databaseURL:
        "https://gyanchakkhu-b9b48-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gyanchakkhu-b9b48",
    storageBucket: "gyanchakkhu-b9b48.firebasestorage.app",
    messagingSenderId: "928051191328",
    appId: "1:928051191328:web:020b956d8592ceace72645",
    measurementId: "G-KEJR4RWPJ5",
};

export const app = initializeApp(firebaseConfig);
