import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.VITE_REACT_apiKey,
  authDomain: import.meta.VITE_REACT_authDomain,
  projectId: import.meta.VITE_REACT_projectId,
  storageBucket: import.meta.VITE_REACT_storageBucket,
  messagingSenderId: import.meta.VITE_REACT_messagingSenderId,
  appId: import.meta.VITE_REACT_appId,
  measurementId: import.meta.VITE_REACT_measurementId
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
