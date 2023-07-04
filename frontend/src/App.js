import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Main from './Components/ForgetPass/Main';
import Dashboard from './Components/Dashboard/Main';
import Report from './Components/Dashboard/main/Reports/Report';
import MainContent from './Components/Dashboard/main/MainContent';
import InvoiceTable from './Components/Dashboard/main/invoice/InvoiceTable';
import MainInvoice from './Components/Dashboard/main/createInvoice/MainInvoice';
import UserList from './Components/User/UserList';
import List from './Components/User/Userlist/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainCategoryCom from './Components/Category/MainCategoryCom';
import ResetMain from './Components/ResetPass/ResetMain';
import MainProduct from './Components/Products/MainProduct';
import AddProdMain from './Components/Products/addproduct/AddProdMain';
import Order from './Components/order/Order';
import ViewOrderDetail from './Components/order/ViewDetails/ViewOrderDetail';
import RefundMain from './Components/Refund/RefundMain';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Signup />} />
        <Route exact path='/forget-password' element={<Main />} />

        <Route exact path='/dashboard' element={<Dashboard />}>
          <Route index element={<MainContent />} />
          <Route path='/dashboard/report' element={<Report />} />
          <Route path='/dashboard/invoice' element={<InvoiceTable />} />
          <Route path='/dashboard/add' element={<MainInvoice />} />
        </Route>
        
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/register' element={<Signup/>}/>
        <Route exact path='/forget-password' element={<Main/>}/>
        <Route exact path='/reset-password' element={<ResetMain/>}/>

        <Route exact path='/dashboard' element={<Dashboard/>}>
          <Route index element={<MainContent/>}/>
          <Route path='/dashboard/report' element={<Report/>}/>
          <Route path='/dashboard/invoice' element={<InvoiceTable/>}/>
          <Route path='/dashboard/add' element={<MainInvoice/>}/>
        </Route>

        <Route exact path='/user' element={<UserList/>}>
          <Route index element={<List/>}/>
          <Route path='/user/category' element={<MainCategoryCom/>}/>
          <Route path='/user/product' element={<MainProduct/>}/>
          <Route path='/user/addproduct' element={<AddProdMain/>}/>
          <Route path='/user/order' element={<Order/>}/>
          <Route path='/user/orderdetail' element={<ViewOrderDetail/>}/>
          <Route path='/user/refund' element={<RefundMain/>}/>
        </Route>

        <Route exact path='/user' element={<UserList />}>
          <Route index element={<List />} />
        </Route>
        {/* <Route path='/*' element={<ToastContainer />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer limit={1} /> */}
    </>
  );
}

export default App;
