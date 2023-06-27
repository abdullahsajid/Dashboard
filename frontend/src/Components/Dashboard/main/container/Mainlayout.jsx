import React from 'react'
import './content.css'
import Saleoverview from './Sales/Saleoverview'
import Revenue from './Sales/Revenue'
import TotalEarn from './Sales/TotalEarn'
import Earnreport from './Sales/Earnreport'
const Mainlayout = () => {
    return (
        <div className='layout-content'>
            <div>
                <div className='row'>
                    <Saleoverview/>
                    <Revenue/>
                    <TotalEarn/>
                    <Earnreport/>
                </div>
            </div>
        </div>
    )
}

export default Mainlayout
