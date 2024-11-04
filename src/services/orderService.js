import { 
    collection,
    addDoc, 
    getDocs, 
    doc, 
    getDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    orderBy 
} from "firebase/firestore";

import {db} from "./firebaseConfig"

//Read all orders
export const getOrders = async () => {
    const querySnapShot = await getDocs(collection(db, 'Orders'));
    const datalist = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return datalist;
}

//Mostrar todas las Ordenes
