import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'
import Main from './Components/ForgetPass/Main';
import Dashboard from './Components/Dashboard/Main'
import Report from './Components/Dashboard/main/Reports/Report'
import MainContent from './Components/Dashboard/main/MainContent';
import InvoiceTable from './Components/Dashboard/main/invoice/InvoiceTable';
import MainInvoice from './Components/Dashboard/main/createInvoice/MainInvoice';
import UserList from './Components/User/UserList';
import List from './Components/User/Userlist/List';
import MainCategoryCom from './Components/Category/MainCategoryCom';
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
          <Route path='/dashboard/invoice' element={<InvoiceTable/>}/>
          <Route path='/dashboard/add' element={<MainInvoice/>}/>
        </Route>

        <Route exact path='/user' element={<UserList/>}>
          <Route index element={<List/>}/>
          <Route path='/user/category' element={<MainCategoryCom/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
