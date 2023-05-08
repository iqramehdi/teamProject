import React from 'react';
import ContentFile from './ContentFile';

function Contactus() {
  return (
    <>
    <div className='container'><br/>
   <h2>Contact Us</h2>
      <div className='row'>
        <div className='col-sm-12'>
        <label>Name</label>
          <input type='text' className='form-control' name='name' placeholder='Enter Your Name Here' ></input>
        <label>Last Name</label>
          <input type='text' className='form-control' name='lname' placeholder='Enter Your Last Name Here' ></input>
          <label>Email</label>
          <input type='email' className='form-control' name='email' placeholder='Enter Your Email Here' ></input>
          <label>Phone</label>
          <input type='text' className='form-control' name='number' placeholder='Enter Your Number Here' ></input><br/>
          <button className='btn btn-success'>Click Me</button>
        </div>
      </div>
    </div><br />
    <ContentFile />
    </>
  )
}

export default Contactus;