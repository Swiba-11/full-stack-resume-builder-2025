import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import AuthRoute from './AuthRoute.tsx'

//Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFS05amc8F0NQtwXFfG1iobBPhyl-VZ20",
  authDomain: "authentication-817af.firebaseapp.com",
  projectId: "authentication-817af",
  storageBucket: "authentication-817af.firebasestorage.app",
  messagingSenderId: "61952796454",
  appId: "1:61952796454:web:16585e14c78970d50ac3e7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute><App /></AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)