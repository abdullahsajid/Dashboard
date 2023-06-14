import React from 'react'
import './dashboard.css'
import './main/layout.css'
import Sidebar from './sidebar/Sidebar'
import Header from './main/Header/Header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <div className='app'>
      <Sidebar/>
      <div className='mainLayout'>
        <Header/>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default Dashboard


