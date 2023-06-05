import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'
import Main from './Components/ForgetPass/Main';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/register' element={<Signup/>}/>
        <Route exact path='/forget-password' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
