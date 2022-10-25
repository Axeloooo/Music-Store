// <----- Imports ----->
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
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

export async function createOrder(orderData){
    const collectionRef = collection(db, 'orders');
    const order = await addDoc(collectionRef, orderData);
    return order.id
}

export async function sendDataToFirebase(){
    const data = [
        {
            id:1,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Champagne Poetry",
            feature:"",
            length:"5:36",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:2,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Papi's Home",
            feature:"",
            length:"2:58",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:3,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Girls Want Girls",
            feature:"Lil Baby",
            length:"3:41",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:4,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"In The Bible",
            feature:"Lil Durk & Giveon",
            length:"4:56",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:5,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Love All",
            feature:"Jay-Z",
            length:"3:48",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:6,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Fair Trade",
            feature:"Travis Scott",
            length:"4:51",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:7,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Way 2 Sexy",
            feature:"Future & Young Thug",
            length:"4:17",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:8,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"TSU",
            feature:"",
            length:"5:08",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:9,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"N 2 Deep",
            feature:"Future",
            length:"4:33",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:10,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Pipe Down",
            feature:"",
            length:"3:25",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:11,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Yebba's Heartbreak",
            feature:"Yebba",
            length:"4:13",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:12,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"No Friends In The Industry",
            feature:"",
            length:"3:24",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:13,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Knife Talk",
            feature:"21 Savage & Project Pat",
            length:"4:02",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:14,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"7AM On Bridle Path",
            feature:"",
            length:"3:59",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:15,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Race My Mind",
            feature:"",
            length:"4:29",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:16,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Fountains",
            feature:"Tems",
            length:"3:12",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:17,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"Get Along Better",
            feature:"Ty Dolla $ign",
            length:"3:49",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:18,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"You Only Live Twice",
            feature:"Lil Wayne & Rick Ross",
            length:"3:33",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:19,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"IMY2",
            feature:"Kid Cudi",
            length:"4:12",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:20,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"F*****g Fans",
            feature:"",
            length:"4:05",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:21,
            artist:"Drake",
            album:"Certified Lover Boy",
            title:"The Remorse",
            feature:"",
            length:"5:51",
            year:"2021",
            genre:"Hip-Hop/Rap",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/7/79/Drake_-_Certified_Lover_Boy.png"
        },
        {
            id:1,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Alone Again",
            feature:"",
            length:"4:10",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:2,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Too Late",
            feature:"",
            length:"3:59",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:3,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Hardest To Love",
            feature:"",
            length:"3:31",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:4,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Scared To Live",
            feature:"",
            length:"3:11",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:5,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Snowchild",
            feature:"",
            length:"4:07",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:6,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Escape From LA",
            feature:"",
            length:"5:55",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:7,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Heartless",
            feature:"",
            length:"3:21",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:8,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Faith",
            feature:"",
            length:"4:43",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:9,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Blinding Lights",
            feature:"",
            length:"3:21",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:10,
            artist:"The Weeknd",
            album:"After Hours",
            title:"In Your Eyes",
            feature:"",
            length:"3:57",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:11,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Save Your Tears",
            feature:"",
            length:"3:35",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:12,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Repeat After Me (Interlude)",
            feature:"",
            length:"3:15",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:13,
            artist:"The Weeknd",
            album:"After Hours",
            title:"After Hours",
            feature:"",
            length:"6:01",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:14,
            artist:"The Weeknd",
            album:"After Hours",
            title:"Until I Bleed Out",
            feature:"",
            length:"3:12",
            year:"2020",
            genre:"R&B/Soul",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
        },
        {
            id:1,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Si Veo A Tu Mamá",
            feature:"",
            length:"2:50",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:2,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"La Díficil",
            feature:"",
            length:"2:43",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:3,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Pero Ya No",
            feature:"",
            length:"2:40",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:4,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"La Santa",
            feature:"Daddy Yankee",
            length:"3:26",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:5,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Yo Perreo Sola",
            feature:"",
            length:"2:52",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:6,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Bichiyal",
            feature:"Yaviah",
            length:"3:16",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:7,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Solía",
            feature:"",
            length:"2:39",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:8,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"La Zona",
            feature:"",
            length:"2:16",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:9,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Qué Malo",
            feature:"Ñengo Flow",
            length:"2:47",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:10,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Vete",
            feature:"",
            length:"3:12",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:11,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Ignorantes",
            feature:"Sech",
            length:"3:30",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:12,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"A Tu Merced",
            feature:"",
            length:"2:55",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:13,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Una Vez",
            feature:"Mora",
            length:"2:433:52",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:14,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Safaera",
            feature:"Jowell & Randy & Ñengo Flow",
            length:"4:55",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:15,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"25/8",
            feature:"",
            length:"4:03",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:16,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Esta Cabrón Ser Yo",
            feature:"Anuel AA",
            length:"3:47",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:17,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Puesto Pa' Guerrial",
            feature:"Myke Towers",
            length:"3:10",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:18,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"P FKN R",
            feature:"Kendo Kaponi & Arcángel",
            length:"4:18",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:19,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"Hablamos Mañana",
            feature:"Duki & Pablo Chill-E",
            length:"4:00",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        },
        {
            id:20,
            artist:"Bad Bunny",
            album:"YHLQMDLG",
            title:"<3",
            feature:"",
            length:"2:37",
            year:"2020",
            genre:"Latin Urban",
            stock:10,
            initial:1,
            price:2,
            image:"https://upload.wikimedia.org/wikipedia/en/3/3f/Bad_Bunny_-_Yhlqmdlg.png"
        }
    ]

    const collectionRef = collection(db, 'songs');

    for(const song of data){
        delete(song.id);
        const newDoc = await addDoc(collectionRef, song);
    }
}

export default FirebaseApp;