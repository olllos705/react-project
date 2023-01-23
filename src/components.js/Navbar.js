import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <img className='' src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989507/CoffeShopApp%20Unive%3B/menu.png"></img>
   <div className='me-auto mx-3 d-flex my-auto'>
   <img className='me-auto mx-5' src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989951/CoffeShopApp%20Unive%3B/Group_206.png"></img>
   <h4 className='mx-1 my-auto fst-italic'>Coffee<span className='bg-col-success'>Place</span></h4>
   </div>
<div className='mx-auto '>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-auto">
        <li class="nav-item px-5 fw-bold fst-italic">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      
          <NavLink to="/productdetails" className="border-none fst-italic text-black mt-2 fw-bold px-5 " class="nav-link active fw-bold mt-2 border-none" href="#">Products</NavLink>
        
        <li className="nav-item dropdown px-5 fw-bold">
          <a className="nav-link dropdown-toggle active fst-italic" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item px-5 fw-bold fst-italic">
          <a className="nav-link active">Contact</a>
        </li>
        <NavLink to="/transaction" className="nav-item px-5 fw-bold fst-italic">
          <a className="nav-link active">Cart</a>
        </NavLink>
        <img className='my-auto px-5' src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989507/CoffeShopApp%20Unive%3B/search.png"></img>
        <img  className='my-auto px-1'  src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989507/CoffeShopApp%20Unive%3B/Group_22.png"></img>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar