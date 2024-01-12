import { getFirestore } from "firebase/firestore";
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_apiKey,
    authDomain: import.meta.env.VITE_REACT_authDomain,
    projectId: import.meta.env.VITE_REACT_projectId,
    storageBucket: import.meta.env.VITE_REACT_storageBucket,
    messagingSenderId: import.meta.envVITE_REACT_messagingSenderId,
    appId: import.meta.env.VITE_REACT_appId,
    measurementId: import.meta.env.VITE_REACT_measurementId
  };
  
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)