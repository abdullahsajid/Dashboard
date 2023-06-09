import React from 'react'
import Header from './Header/Header'
import './layout.css'
import Mainlayout from './container/Mainlayout'
const MainContent = () => {
  return (
    <div className='mainLayout'>
      <Header/>
      <Mainlayout/>
    </div>
  )
}

export default MainContent
