import React, { useState } from 'react'
import CImage from './CImage'
import c2 from '../img/c2.webp'
import Heading from './Heading'
import axios from 'axios'
import FormData from 'form-data'

const Quote = () => {
  const [buisnessName, setbuisnessName] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [file, setfile] = useState("");
  const [info, setinfo] = useState({
    quantity:""
  })
  
 
    // quantity:"",
    // dimension:"",o
    // typeOfPaper:"",
    // paperWeight:"",
    // paperColor:"",
    // finish:"",
    // colorOption:"",
    // numberOfSides:"",
    // bindery:"",
    // notes:"",

  


  const handleInput =(e)   => {
  const value = e.target.value
  const name = e.target.name


  setinfo((prev) =>{
    return{
      ...prev,
      [name]:value
    }
  })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
  //   try {
  //   // const {buisnessName,firstName,lastName,email,phone, file}   = info
         
  //     const productData = new FormData();
  //     productData.append("buisnessName", buisnessName);
  //     productData.append("firstName", firstName);
  //     productData.append("lastName", lastName);
  //     productData.append("email", email);
  //     productData.append("phone", phone);
  //     // productData.append("dimension", dimension);
  //     // productData.append("typeOfPaper", typeOfPaper);
  //     // productData.append("paperWeight", paperWeight);
  //     // productData.append("paperColor", paperColor);
  //     // productData.append("finish", finish);
  //     // productData.append("quantity", quantity);
  //     // productData.append("colorOption", colorOption);
  //     // productData.append("numberOfSides", numberOfSides);
  //     // productData.append("bindery", bindery);
  //     // productData.append("notes", notes);
  //     productData.append("file", file);
  //   const res = await axios.post("/api/v1/auth/quote",
  //  productData
  //     )
  //     console.log(productData)
  //   window.alert("your quote send sucessfully")
  //   console.log(res.data.message)

  //   console.log(res)
  // } catch (error) {
  //   console.log(error)
  // } 
  }

  return (
  <>
     <CImage  heading={"Quote"}
    img={c2}
    text ={'What project can we help you with?'}
   />
   <div className='container mt-5'>
    <Heading  text="request a quote" />
    <div className='row'>
    <div className='col-12 col-xs-12 '>
      <form onSubmit={handleSubmit}>
  <div class="form-group mb-5 p-1" >
    <label for=""> Business Name <span>*</span></label>
    <input type="text" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your name" name='buisnessName'
     onChange={(e) => setbuisnessName(e.target.value)}  value={buisnessName}  />
  </div>
  
  <div class="row  mb-5" >
  <label for="exampleInputEmail1  "> Name <span>*</span></label>
  <div class="col">
      <input type="text" class="form-control" placeholder="First name" name='firstName'
       onChange={(e) => setfirstName(e.target.value)}  value={firstName}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" name='lastName'
      onChange={(e) => setlastName(e.target.value)}  value={lastName}/>
    </div>
  </div>
  <div class="form-group mb-5 w-75 ">
    <label for="exampleInputPassword1">email <span>*</span></label>
    <input type="email" class="form-control mt-2" id="exampleInputPassword1" placeholder="email" name='email'
     onChange={(e) => setemail(e.target.value)}  value={email}/>
  </div>

  <div class="form-group mb-5 w-75">
    <label for="exampleInputPassword1">phone <span>*</span></label>
    <input type="phone" class="form-control mt-2" id="exampleInputPassword1" placeholder="phone number" name='phone'
    onChange={(e) => setphone(e.target.value)}  value={phone} />
  </div>

   <div class="form-group mb-5 p-1 w-75" >
    <label for="exampleInputEmail1">  Quantity <span>*</span></label>
    <input type="number" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="qunatity" name='quantity'
    onChange={(e) => handleInput(e)}  value={info.quantity}/>
  </div>

  <div class="form-group mb-5 p-1 w-75" >
    <label for="exampleInputEmail1">  Dimensions <span>*</span></label>
    <input type="text" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Dimensions" name='dimension'
    onChange={(e) => handleInput(e)}  value={info.dimension}/>
  </div>

  <label for="exampleInputEmail1">type of paper <span>*</span></label>
  <select class="form-select w-75 mb-5 mt-3" aria-label="Default select example " name='typeOfPaper'
  onChange={(e) => handleInput(e)}> value={info.typeOfPaper}
  <option value="One">One</option>
  <option value="Two">Two</option>
  <option value="Three">Three</option>
</select>
  
  <div class="form-group mb-5 p-1 w-75" >
    <label for="exampleInputEmail1 ">  Paper weight <span>*</span></label>
    <input type="text" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="paper weight" name='paperWeight'
    onChange={(e) => handleInput(e)}  value={info.paperWeight}/>
  </div>

   <div class="form-group mb-5 p-1 w-75" >
    <label for="exampleInputEmail1">  Paper Color <span>*</span></label>
    <input type="text" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Paper Color" name='paperColor'
    onChange={(e) => handleInput(e)}  value={info.paperColor}/>
  </div>

  <label for="exampleInputEmail1">finish <span>*</span></label>
  <select class="form-select w-75 mb-5 mt-3" aria-label="Default select example " name='finish'
  onClick={(e) => handleInput(e)}> value={info.finish}
  <option value="gloss">gloss</option>
  <option value="mattle">mattle</option>
</select>
  
  <label for="exampleInputEmail1">color option <span>*</span></label>
  <select class="form-select w-75 mb-5 mt-3" aria-label="Default select example" name='colorOption'
  onClick={(e) => handleInput(e)}> value={info.colorOption}
  <option value="full color">full color</option>
  <option value="black & white color">black & white color</option>
  <option value="two color">two color</option>
</select>

<label for="exampleInputEmail1">number of sides <span>*</span></label>
  <select class="form-select w-75 mb-5 mt-3" aria-label="Default select example" name='numberOfSides'
  onClick={(e) => handleInput(e)}> value={info.numberOfSides}
  <option value="single sided">single sided</option>
  <option value="two sided">two sided</option>
  <option value="multiple sided">multiple sided</option>
</select>

<label for="exampleInputEmail1">bindery <span>*</span></label>
  <select class="form-select w-75 mb-5 mt-3" aria-label="Default select example" name='bindery'
  onClick={(e) => handleInput(e)}> value={info.bindery}
  <option value="folded">folded</option>
  <option value="stapled">stapled</option>
  <option value="perfect bind">perfect bind</option>
  <option value="paded">paded</option>
  <option value="drilled">drilled</option>
  <option value="spiral">spiral</option>
  <option value="comb">comb </option>
  <option value="no binding">no binding </option>
</select>


<div class="form-group mb-5 col-12 w-75">
    <label for="exampleInputPassword1 ">Notes / special instructions about your project? <span>*</span></label>
    <textarea type="password" class="form-control mt-2" id="exampleInputPassword1"  rows="5" cols="50"  placeholder="type here..." name='notes'
      onChange={(e) => handleInput(e)}
 value={info.notes}    />
  </div>
 
 <div className="mb-3">
                    <label className="btn btn-outline-secondary col-md-12">
                      {file ? file.name : "Upload Photo"}
                      <input
                        type="file"
                        name="file"
                          accept="image/*"
                        onChange={(e) => setfile(e.target.files[0])}
                        hidden
                      />  
                    </label>
                  </div>
      <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
    </div>
  </>
  )
}

export default Quote