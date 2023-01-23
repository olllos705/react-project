import React from 'react'

const payment = () => {
  return (
     <div className='container mx-auto me-5'>
    <div className='row'>
      <div className='col-md mt-3'>
        <h2 className='text-warning text-center'>Coffee<span className='text-primary'>Shop</span></h2>
        <p>
          <span className='text-success'>Cart</span> 
          <i className="bi bi-chevron-right mx-3"></i>
          <span>Details</span>
          <i className="bi bi-chevron-right mx-3"></i> 
          <span>Delivery</span> 
          <i className="bi bi-chevron-right mx-3"></i> 
          <span>Payment</span>
        </p>
        
        <div className='formpart'>
          <article className='d-flex'>
            <h4>Contact</h4>
            <p className='mx-auto mt-1 me-1'>Dont have an account? <span  className='text-success '>Login</span></p>
          </article>
            <input type="email" className="form-control border-radius:0" id="exampleFormControlInput1" placeholder="Email or mobile phone number" />
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                Add me to Candleaf newsletter for a 10% discount
              </label>
            </div>
        </div>
<p></p>
<p></p>
<p></p>
        <article>
          <h4>
            Delivery Address
          </h4>
        </article>
        <form className="row g-3 my-50px">
<div className="col">
  <label className='visually-hidden'></label>
  <input type="text"  className="form-control w-80" id="inputPassword1" placeholder="Name" />
</div>
<div className="col">
  <label for="inputPassword2" className="visually-hidden">Second Name</label>
  <input type="name" className="form-control w-80" id="inputPassword2" placeholder="Second Name" />
</div>
</form>
<input type="email" className="form-control  my-2" id="exampleFormControlInput1" placeholder="Address & number" />

<input type="email" className="form-control my-2" id="exampleFormControlInput1" placeholder="Shipping note(optional)" />
<div className='row g-3'>
<div class="col-md-4">
  <label for="inputCity" class="form-label">City</label>
  <input type="text" class="form-control" id="inputCity" placeholder="City name" />
</div>
<div class="col-md-4">
  <label for="inputState" class="form-label">province</label>
  <select id="inputState" class="form-select">
    <option selected>province..</option>
    <option>...</option>
  </select>
</div>
<div class="col-md-4 mt-4">
  <label for="inputZip" class="form-label"></label>
  <input type="text" class="form-control" id="inputZip" placeholder='zip code' />
</div>
</div>
    <input type="text" className="form-select my-2 fw-bold" id="exampleFormSelectInput1" placeholder  ='country/religion
    '></input>
<div className="form-check">
<input className="form-check-input" type="checkbox" name="flexCheckDefault" id="flexCheckDefault1" />
<label className="form-check-label" for="flexCheckDefault1">
  Save this information for a future fast checkout
</label>
</div >
<div className='text-success mt-5 row mx-auto justify-content-between'>
<div className='col-md-6'>

</div>
<div className='col-md-6 mx-auto text-left me-5'>
<button class="btn btn-success" type="button">Go to Shipping</button>
</div>
</div>
    </div>
    </div>
    
  <div>
    </div>
    </div>
  )
}

export default payment