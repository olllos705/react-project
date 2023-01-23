

import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './Home';
import Productdetails from './pages/Productdetails';
import Coffedetails from './pages/Coffedetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Navbar from './components.js/Navbar';
import Transaction from './components.js/Transaction';
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
<Route path="/" element= { <Home/>} />
<Route path="/productdetails" element={<Productdetails />} />
<Route path="/coffedetails" element={<Coffedetails />} />
<Route path="/cart" element= {<Cart />} />
<Route path='/Payment' element={<Payment />} /> 
<Route path='/navbar' element={<Navbar />} /> 
<Route title="/transaction" path='/transaction' element={<Transaction />} /> 
    </Routes>
    </BrowserRouter> 
    
  );
}

export default App