import React from 'react'
import { NavLink } from 'react-router-dom'
const coffedetails = () => {
  return (
    
    <div className='mt-2 bg-light'>
      <div>
        <nav class="navbar navbar-expand-lg bg-white">
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
        <li className="nav-item px-5 fw-bold fst-italic">
          <a className="nav-link active">Cart</a>
        </li>
        <img className='my-auto px-5' src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989507/CoffeShopApp%20Unive%3B/search.png"></img>
        <img  className='my-auto px-1'  src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989507/CoffeShopApp%20Unive%3B/Group_22.png"></img>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
        <div className='row row-cols-2'>
<div className='col-md-12 d-flex'>
<div class="card w-50   mt-5 ms-5 border border-5"  >
  <img className='mt-5' src="https://www.bing.com/th?id=OIP.kN6XKHZygO4plwM-FghNxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
 <p className='mt-3 text-center fw-bold fst-italic text-danger fs-5'>Made with love from the <br></br> best wish you all a great christmas!And happy new year.</p>
 <h4 className='text-center text-success fst-italic'> 🚌Delivered to your door!</h4>
</div>

 

<div className='col-md-6 mx-auto mt-4'>
<h2 to="/cart" className='text-center py-5 fst-italic fw-bold'>Loose Coffee Favourites</h2>
<h4 className='text-center fst-italic fw-bold'>Beans, or freshly ground to suit your equipment</h4>
<div className='d-flex ms-5'>
<img className='ms-5' src='https://marvel-b1-cdn.bc0a.com/f00000000209353/www.whittard.co.uk/on/demandware.static/-/Library-Sites-WhittardSharedLibrary/default/dw2712529f/images/contenthub/SEO-Pages/SANTOS_JAVA.png'></img>
<img src='https://marvel-b1-cdn.bc0a.com/f00000000209353/www.whittard.co.uk/on/demandware.static/-/Library-Sites-WhittardSharedLibrary/default/dw2712529f/images/contenthub/SEO-Pages/SANTOS_JAVA.png'></img>
</div>
<div to="/Cart" className='text-center my-auto fs-4 mt-5'>
<NavLink to="/cart" className='rounded text-center border border-success bg-success fw-bold fst-italic text-danger border-bottom-0 '>Add to cart</NavLink>
</div>
<div>

</div>
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

export default coffedetails