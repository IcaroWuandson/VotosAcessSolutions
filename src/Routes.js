import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Database/firebase'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
        <Routes>
         <Route path="/" element={user ? <Home /> : <Login />} />
         <Route exact path="/register" element={<Register/>}/>
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/home" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;