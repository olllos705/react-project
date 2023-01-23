import React from 'react'
import Navbar from './components.js/Navbar'
import Productlist from './pages/Productlist'
import Footer from './components.js/Footer'
import Payment from './pages/Payment'
import Transaction from './components.js/Transaction'
const home = () => {
  return (
    <div >
<Navbar/>
<Productlist />
<Footer/>


    </div>
  )
}

export default home