import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6ing3_Qm8X1DVs22baEaPfk0nBYEAt6g",
    authDomain: "salsamentaria-las-margaritas.firebaseapp.com",
    projectId: "salsamentaria-las-margaritas",
    storageBucket: "salsamentaria-las-margaritas.firebasestorage.app",
    messagingSenderId: "1036061026479",
    appId: "1:1036061026479:web:056e3fcfa300e620e74c5a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
console.log(db);