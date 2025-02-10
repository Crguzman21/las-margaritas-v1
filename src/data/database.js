import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc} from "firebase/firestore";
import products from "./data";

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


// ! SOLO PARA TESTING, NO SE DEBEN USAR
/*export async function createDocument(){
    const newProductRef = doc(db, "products", "nuevo-id");
    await setDoc(newProductRef, {    
    title: 'Limpido x 3800 ml',
    price: '2.06',
    stock: 60,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/26698154/Limpido-Regular-3800-ml-127214_a.jpg?v=638742171105500000',
    category: 'aseo',
    description: 'Limpiador de 3800 ml, ideal para una limpieza profunda con aroma fresco.'
    });

    console.log("Nuevo Documento creado", newDoc);

    
}

export async function exportProductsToDB(){
    for(let item of products){
        delete item.id;
        const docID = await addDoc(collection(db, "products"), item);
        console.log("Documento creado", docID.id);
    }
}

export async function exportProductsWithBatch(){
    const batch = writeBatch(db);

    for(let item of products){
        delete item.id;
        const itemId = `${item.id}`;
        const newDoc = doc(db, "products", `item-${itemId}`);
        batch.set(newDoc, item);
    }

    const commitRes = await batch.commit();
}*/

export async function createBuyOrder(orderData){
    const newOrderDoc = await addDoc(collection(db, "orders",), orderData);
    return newOrderDoc.id
}

export async function updateStock(){

}