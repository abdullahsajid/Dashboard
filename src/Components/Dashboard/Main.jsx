import React from 'react'
import './dashboard.css'
import Sidebar from './sidebar/Sidebar'
import MainContent from './main/MainContent'
const Dashboard = () => {
  return (
    <div className='app'>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default Dashboard
