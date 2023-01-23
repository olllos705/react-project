import React from 'react'
import App from '../App'
import { NavLink } from 'react-router-dom'
import Navbar from '../components.js/Navbar'
import { json } from 'react-router-dom'
import Transaction from '../components.js/Transaction'

const cart = (props) => {

const onClick = (e) =>{
  
 alert("PRODUCT ADDEDD SUCCESSFULLY")
  
}

  return (
  
    < div className='mt-2 bg-white'>
        <article>
        <div>
        <nav class="navbar navbar-expand-lg bg-white text-warning">
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
    <div className='justify-content-center text-black d-flex mt-3 mx-auto bg-white'>
    <span className='border-bottom-0'><p className='text-danger border-none fw-bold fst-italic border-bottom-0' href="">Home</p></span><i class=" mx-2 bi bi-chevron-right"></i>
    <span className='border-0'><p className='text-danger border-none fw-bold fst-italic border-0'  href="">More Products</p></span><i class="mx-2 bi bi-chevron-right"></i>
    <span><p className='text-danger border-none fw-bold fst-italic'  href="">De Pressoo</p></span><i class=" mx-2 bi bi-chevron-right"></i>
    <span><p className='text-danger border-none fw-bold fst-italic'  href="">Doppio</p></span><i class=" mx-2 bi bi-chevron-right"></i>
    <span><p className='text-danger border-none fw-bold fst-italic' href="">Ristretto</p></span><i class=" mx-2 bi bi-chevron-right"></i>
    <span><p className='text-danger border-none fw-bold fst-italic'  href="">Long Depresso</p></span><i class=" mx-2 bi bi-chevron-right"></i>
    <span><p className='text-danger border-none fw-bold fst-italic'  href="">Cappucino</p></span>
    </div>

    </div>
        </article>
        <div class=" card bg-light ">
            <div className='d-flex'>
  <img className='w-50' src="https://www.bing.com/th?id=OIP.kN6XKHZygO4plwM-FghNxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-left w-50" alt="..." />
 <div className=''>
    <p class="card-text text ms-5 fs-2 ">Cappucino Coffee Made With Love And Highest Quality</p>
    <div className='mx-auto ms-5'>
    <i class="text-warning px-1 bi bi-star"></i>
    <i class="text-warning pe-1 bi bi-star"></i>
    <i class="text-warning pe-1 bi bi-star"></i>
    <i class="text-warning pe-1 bi bi-star"></i>
    <i class="text-warning pe-1 bi bi-star"></i>
    <a href="#"><i class="bx bxs-star"></i></a>
    <a href="#"><i class="bx bxs-star"></i></a>
   <p className='text-primary'> (100 verified ratings)</p>
   <div className='position-relative'>
   <h6 className='text-warning position-'>Free Delivery</h6>
   <button id='btn-check' className=' mt-3 bg-warning w-75 mx-auto fs-3 rounded border border-warning text-purple-100'autoComplete="on" onClick={onClick} >  <i class=" me-5  bi bi-cart3"></i>ADD TO CART</button>
   <div className=""><hr></hr></div>
  <p className='text-primary'> <i class="text-warning bi bi-star"></i> Enjoy Delivery Fees At A Better And Good rate</p>
  <p className='text-primary'> <i class=" text-warning bi bi-star"></i> Enjoy Delivery Fees At A Better And Good rate</p>
  <div className='mx-auto'>
<p className='text-black fw-bold'>SHARE THIS PRODUCT</p>
<i class=" fs-3 px-2 bg-none bi bi-facebook"></i>
<i class="fs-3 px-2 bi bi-twitter"></i>
</div>
   </div>
    </div>
    </div>
    </div>
</div>
       <div className=''>
        <h2 className='text-center mt-4 text-line text-danger'>Similar Products</h2>
        <div className='d-flex'>
          <div className='text-center fw-bold'>
          <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/964036/1.jpg?8410"></img>
          <p>XIAOMI Redmi 2000</p>
          <h5>$14,500</h5>
          </div>
          <div className='text-center fw-bold'>
            <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/7468401/1.jpg?2720"></img>
            <p>New Age 3000mAh</p>
            <h5>$22,800</h5>
          </div>
          <div className='rounded text-center fw-bold'>
            <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/732007/1.jpg?8153"></img>
            <p>Multipurpose Powerb</p>
            <h5>$22,999</h5>
          </div>
          <div className='text-center fw-bold'>
            <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/4489831/1.jpg?9963"></img>
            <p>Oraimo 2700mAh</p>
            <h5>$18,000</h5>
          </div>
          <div className='text-center'>
            <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/7694611/1.jpg?0065"></img>
            <p className='fw-bold fst-italic'>Multipurpose Powerb</p>
            <h5>$18,999</h5>
          </div>
        </div>
        </div> 
        
          
        
        <div className='container-fluid bg-black max-vh-75 mt-5 p-4'>
      
      <div className='row-sm-5 my-auto row'>
          <div className='col-md-4 height="20px py-auto me-5 mx-auto'>
      <img className='py-auto w-50 h-100 ms-auto'src="https://topteacoffee.com/storage/2022/01/Top-Tea-Coffee-FAVICON.png"></img> 
      

 
  </div>
  <div className='col-md-2 text-white text-above me-5 mt-4'>
      <h5 className='text-start fw-bold'>USEFUL LINKS</h5>
      <p className='my-2 text-start fw-bold '><a href="" className=' my-3 text-success text-decoration-none text-start'>Lead generation</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className=' my-3 text-success text-decoration-none text-center'>Become an Affiliates</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className=' my-3 text-success text-decoration-none text-center'> Shipping rates</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className='my-3 text-success text-decoration-none text-start' > Help</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className='my-3 text-success text-decoration-none  text-center'> Contract</a></p>
</div>

<div className='col-md-2 text-white text-above me-5 mt-4 '>
      <h5 className='text-start fw-bold'>CATEGORIES</h5>
      <p className='my-2 text-start fw-bold '><a href="" className=' my-3 text-success text-decoration-none text-start'>Wellness</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className=' my-3 text-success text-decoration-none text-center'>Uncategorized</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className=' my-3 text-success text-decoration-none text-center'> Research</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className='my-3 text-success text-decoration-none text-start' > Ommi Theme</a></p>
</div>





<div className='col-md-2 text-white text-above me-5 mt-4 '>
      <h5 className='text-start fw-bold'>CONTACT</h5>
      <p className='my-2 text-start fw-bold '><a href="" className=' my-3 text-success text-decoration-none text-start'>Address:</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className=' my-3 text-success text-decoration-none text-center'>Email:</a></p>
      <p className='my-2 text-start fw-bold'><a href="" className=' my-3 text-success text-decoration-none text-center'> Phone:</a></p>
</div>
<div>
      <hr className='fw-bold text-white border border-'></hr>
</div>

<div className='d-flex justify-content-between'>
<div className='text-white'>
     <h5 className='text-white fw-bold text-success'>copyright privacypolicy&2021</h5>


</div>
<div className=' text-end text-success  '>
<i className='' class=" mx-3 bi bi-facebook"></i>
<i class=" mx-3 bi bi-youtube"></i>
<i class="  mx-3 bi bi-twitter"></i>
<i class=" mx-3 bi bi-instagram"></i>
</div>
</div>
</div>
<div className="modal text-white " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div class="modal-dialog modal-dialog-centered text-white">
    <div class="modal-content text-white">
      <div class="modal-header">
        <h1 class="modal-title fs-1 text-white" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Modal</button>
      </div>
      <div class="modal-body text-white">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer text-white">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>

      </div>
      <div class="modal " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-1 text-primary" id="exampleModalToggleLabel">Modal 1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Modal</button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>



        </div>
        
  )
}

export default cart