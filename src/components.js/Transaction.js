import React from 'react'
import { NavLink } from 'react-router-dom'
import Transaction from '../components.js/Transaction'
const transaction = () => {
  const badbtn = document.getElementById("power")
  const powerbtn= document.getElementById("top")
  const formbtn= document.getElementById("tot")
  const onClick = () =>{
 return Math.floor(badbtn*20)
 
  }
console.log(onClick)
  const onDoubleClick = (e) =>{

    powerbtn.innerHTML=alert("PRODUCT HAS BEEN ORDERED SUCCESSFULLY")
   }

  
  
  
  
  
  
   return (

    <div>
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
      <div className='ms-4'>
<div className=' card-img-left bg-light border card-center  border-3 rounded mt-3 w-100 row'>
<h4 className='fw-bold  mt-2 mb-2  ms-3 my-auto'>Cart (1)</h4>
  <hr></hr>
  <div className='col-md-10 d-flex'>
<img className='w-50' src="https://www.bing.com/th?id=OIP.kN6XKHZygO4plwM-FghNxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
<div className='ms-4 fw-bold fst-oblique'>
  <h4>Cappucino Coffee Made with Love And All The Best In The World </h4>
  <p>Seller:BIMFAJ ENTERPRISES</p>
  <p>In Stock</p>
  <div className=' mt-3 card w-75 fw-bold '>
  <h5 className='ms-2 mt-2'>CART SUMMARY</h5>
  <hr></hr>
  <div className='d-flex justify-content-between' id='tot'>
  <p>Subtotal</p>
  <h4 id='tot'>$9.99

  </h4>
  </div>
  <p>Delivery fees not included yet</p>
  <hr></hr>
  <div className='text-center '>
<button className='bg-warning border border-warning rounded w-100 text-white border border-3'autoComplete="on" onDoubleClick={onDoubleClick} id="top"><h5>CHECKOUT ($9.99)</h5></button>
</div>
</div>
</div>
  </div>
  <div className='col-md-2 text-end mt-5'>
<h4 id='power'>$99.9</h4>
<p className='text-warning bg-light'>-50%</p>
  </div>
  <div className='d-flex justify-content-between mt-3'>
    <div className='fw-bold fs-italic fs-4'>
  <i class="text-warning  bi bi-trash"></i><span className='text-warning'>Remove</span>
  </div>
  <div className='fs-4   '>
  <input type="number" min="0"  class="form-control text-primary border border-2 border-warning w-50 mx-auto text-center"autoComplete="on" onClick={onClick} id="amountinput2"/>
  </div>
  
  </div>
  
</div>
</div>

<div className=''>
        <h2 className='text-center mt-4 text-line text-danger'>Recently viewed</h2>
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
</div>
</div>
  
  )
}

export default transaction