import React from 'react'
import Add from './Add'
import BtnSection from './BtnSection'
const MainInvoice = () => {
  return (
    <div className='layout-content'>
      <div>
        <div className='row'>
            <Add/>
            <BtnSection/>
        </div>
      </div>
    </div>
  )
}

export default MainInvoice
