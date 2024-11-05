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

const createOrder = async (order) => {
    try{
        const docRef = await addDoc(collection(db, "Orders"), order);
        console.log("Order created with ID: ", docRef.id);
        return docRef.id;
    }
    catch(e){
        console.error("Error adding document: ", e)
    }


}

//Read all orders
const getOrders = async () => {
    const querySnapShot = await getDocs(collection(db, 'Orders'));
    const datalist = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return datalist;
}

export {getOrders, createOrder}
//Mostrar todas las Ordenes
