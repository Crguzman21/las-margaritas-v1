import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";

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


export default async function getAsyncData(){
    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef);

    const documentsData = productsSnapshot.docs.map(doc => {

        const fullData = doc.data();
        fullData.id = doc.id;
        return fullData;
    }
    );
    
    return documentsData;
}

export async function getAsyncItemById(itemID){

    const docRef = doc(db, "products", itemID);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();

    return docData;
}

export async function getAsyncDataByCategory(catID){

    const productsColRef = collection(db, "products");
    const q = query(productsColRef, where("category", "==", catID));

    const productsSnapshot = await getDocs(q);

    const documentsData = productsSnapshot.docs.map(doc => {

        const fullData = doc.data();
        fullData.id = doc.id;
        return fullData;
    }
    );
    
    return documentsData;

}