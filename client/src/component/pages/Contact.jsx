import React, { useState } from 'react'
import contact1 from '../img/contact1.webp'
import CImage from './CImage'
import { ToastContainer, toast } from 'react-toastify';
import Heading from './Heading'
import axios from 'axios'
const Contact = () => {

  const [ userInfo , setUserInfo ] = useState({
    name:"",
    email:"",
    phone:"",
    messege:"",
  })

const handleInput =  (e) => {
  const value = e.target.value
  const name = e.target.name
  console.log(value,name)

  setUserInfo((prev) => {
    return{
      ...prev,
      [name] : value
    }
    
  })
}
const handleSubmit = async(e) => {
  e.preventDefault()
  const {name,email,phone,messege} = userInfo;
  // try {
  //   const res =await axios.post("/api/v1/auth/contact",{
  //    name,
  //    email,
  //    phone, 
  //     messege,
  //   })
  //   console.log(res.data.message)
  //   console.log(res)
  //   toast.success("your responce submit")
  // } catch (error) {
  //   console.log(error)
  // }
}
  return (
   <>
     <CImage heading={"Contact Bartel Printing Company, Inc."}
    img={contact1}
    text ={'How can we help?'}
   />
   
   <div className='container mt-5'>
   <Heading text={'Contact Us'} />
   <form onSubmit={handleSubmit}>
  <div class="form-group mb-5 p-1" >
    <label for="exampleInputEmail1"> name <span>*</span></label>
    <input type="text" class="form-control mt-2" id="exampleInputEmail1"  placeholder="your name" name="name" 
    onChange={(e) => {handleInput(e)}}  value={userInfo.name} required/>
  </div>
  
  <div class="form-group mb-5">
    <label for="exampleInputPassword1">email <span>*</span></label>
    <input type="email" class="form-control mt-2" id="exampleInputPassword1" placeholder="email"  name='email' 
     onChange={(e) => {handleInput(e)}}  value={userInfo.email} required/>
  </div>

  <div class="form-group mb-5">
    <label for="exampleInputPassword1">phone <span>*</span></label>
    <input type="number" class="form-control mt-2" id="exampleInputPassword1" placeholder="phone" name='phone' 
       onChange={(e) => {handleInput(e)}}  value={userInfo.phone} required
    />
  </div>

  <div class="form-group mb-5">
    <label for="exampleInputPassword1 ">Comment or Question <span>*</span></label>
    <textarea type="text" class="form-control mt-2" id="exampleInputPassword1"  rows="7" cols="50"  placeholder="ask anything" name='messege' 
       onChange={(e) => {handleInput(e)}}  value={userInfo.messege} required
    />
  </div>
  
  <button type="submit" class="btn btn-primary ">Submit</button>
</form>
        <ToastContainer />

  </div>

   </>
  )
}

export default Contact