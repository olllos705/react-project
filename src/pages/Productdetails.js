import React from 'react'
import { NavLink } from 'react-router-dom'

const Productdetails = () => {
  return (
    <div className='bg-danger'>
      <article className='text-center fw-bold'>
        <h1 className='text-primary'>Cof<span className='text-success'>fee</span></h1>
        <p>Leave Your Reality And Make Your Way<br></br> Into The New World</p>
      </article>
        <div className=' container-fluid d-flex mx-auto bg-light '>
        <div class="card w-25 mt-5 mx-auto"  >
  <img src="https://www.bing.com/th?id=OIP.kN6XKHZygO4plwM-FghNxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
  <div class="card-body">
    <NavLink to="/coffedetails" className='text-danger my-4 fs-2 fw-bolder'>LA PORTE COFFEE</NavLink>
    <h4 className=' text-danger mt-4'>$9</h4>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>

<div class="card w-25 mt-5 mx-auto"  >
  <img src="https://www.bing.com/th?id=OIP.w6U32To5QmRwM5wf9os69QHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
  <div class="card-body">
   <h2 className='text-success my-4'>DAQ2 COFFEE</h2>
    <h4 className='text-success'>$10</h4>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>

<div class="card w-25 mt-5 mx-auto"  >
  <img src="https://www.bing.com/th?id=OIP.o5TlM7pgBa64uzqsNvI6BQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
  <div class="card-body">
    <h2 className='text-warning my-4'>DORRIS COFFEE</h2>
    <h4 className='text-warning'>$20</h4>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
</div>




<div className=' container-fluid d-flex mx-auto  bg-light '>
        <div class="card w-25 mt-5 mx-auto"  >
  <img src="https://www.bing.com/th?id=OIP.kN6XKHZygO4plwM-FghNxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
  <div class="card-body">
    <h2 className='text-danger my-4'>LA PORTE COFFEE</h2>
    <h4 className=' text-danger'>$9</h4>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>

<div class="card w-25 mt-5 mx-auto"  >
  <img src="https://www.bing.com/th?id=OIP.w6U32To5QmRwM5wf9os69QHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
  <div class="card-body">
   <h2 className='text-success my-4'>DAQ2 COFFEE</h2>
    <h4 className='text-success'>$10</h4>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>

<div class="card w-25 mt-5 mx-auto"  >
  <img src="https://www.bing.com/th?id=OIP.o5TlM7pgBa64uzqsNvI6BQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="" />
  <div class="card-body">
    <h2 className='text-warning my-4'>DORRIS COFFEE</h2>
    <h4 className='text-warning'>$20</h4>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
</div>





</div>








  
  )
}

export default Productdetails