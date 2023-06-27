import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'
import Main from './Components/ForgetPass/Main';
import Dashboard from './Components/Dashboard/Main'
import Report from './Components/Dashboard/main/Reports/Report'
import MainContent from './Components/Dashboard/main/MainContent';
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/register' element={<Signup/>}/>
        <Route exact path='/forget-password' element={<Main/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}>
          <Route index element={<MainContent/>}/>
          <Route path='/dashboard/report' element={<Report/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
