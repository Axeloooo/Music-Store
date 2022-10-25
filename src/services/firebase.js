// <----- Imports ----->
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { data } from "jquery";
// <------------------->

const firebaseConfig = {
    apiKey: "AIzaSyAoqGvNR39JPj7T6EvXjGkOj40jTibIQY0",
    authDomain: "music-store-f861d.firebaseapp.com",
    projectId: "music-store-f861d",
    storageBucket: "music-store-f861d.appspot.com",
    messagingSenderId: "811283619193",
    appId: "1:811283619193:web:3e89158eae3d298730e3a8"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getSongs(){
    try{
        const querySnapshot = await getDocs(collection(db, 'songs'));
        if(querySnapshot){
            const songsData = querySnapshot.docs.map((doc) => {
                return( {id: doc.id, ...doc.data()} );
            });
            return songsData;
        }
        else{
            throw new Error('Error retrieving data.');
        }
    }
    catch(error){
        console.log(error);
    }
}

export async function getSong(params){
    try{
        const docSnap = await getDoc(doc(db, 'songs', params));
        if(docSnap){
            return( {id: docSnap.id, ...docSnap.data()} );
        }
        else{
            throw new Error('Error retrieving data.');
        }
    }
    catch(error){
        console.log(error)
    }
    
}

export async function getArtist(params){
    try{
        const artistRef = collection(db, 'songs');
        const queryRequest = await getDocs(query(artistRef, where("artist", "==", params)));
        if(queryRequest){
            const artistData = queryRequest.docs.map((doc) => {
                return( {id: doc.id, ...doc.data()} );
            })
            return artistData;
        }
        else{
            throw new Error('Error retrieving data.');
        }
    }
    catch(error){
        console.log(error);
    }
}

export default FirebaseApp;