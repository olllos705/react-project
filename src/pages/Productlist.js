import React from 'react'
import  '../App.css'
const productlist = () => {
  return (
    <div class='pool'>
    <div className='container-fluid  d-flex'>
<div className='text- text-white  my-auto mx-auto fst-italic'>
  <p className='text-start'>Cappuccino Coffee</p>
  <h1 className='fw-bold text-start'>Start Your Day<br></br>With Good Coffee</h1>
  <p className='text-start'>it is a long established fact that a reader will be distracted by <br></br> the readable content of a page when looking at its layout</p>
  <div className='text-start'>
  <button className='border-30 bg-danger me-auto btn btn-lg'>Order Now</button>
  </div>
</div>
<img className='img-fluid mx-auto'src="https://res.cloudinary.com/oluwaloni/image/upload/v1662989508/CoffeShopApp%20Unive%3B/coff-removebg-preview_1.png" alt=''></img>
    </div>
    </div>
  )
}

export default productlist