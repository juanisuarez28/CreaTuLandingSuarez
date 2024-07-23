import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAFpQ-2076TGieO3VVzTIp0BO3pOrAsJI",
  authDomain: "proyecto-react-d9011.firebaseapp.com",
  projectId: "proyecto-react-d9011",
  storageBucket: "proyecto-react-d9011.appspot.com",
  messagingSenderId: "991909724862",
  appId: "1:991909724862:web:24635d048a4160a6fb54ef",
  measurementId: "G-ZTM0C47YLR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//products.forEach((prod)=>{
  //addDoc(collection(db, "productos"), prod)
    //.then((data)=>
      //console.log(`el producto ${data.id} fue cargado correctamente`)
    //)
    //.catch((error)=> console.log(error))
//})