import React from 'react'
import CImage from './CImage'
import c6 from '../img/c6.webp'
import w1 from '../img/w1.webp'
import w2 from '../img/w2.webp'
import w3 from '../img/w3.webp'
import w4 from '../img/w4.webp'
import w5 from '../img/w5.webp'
import w6 from '../img/w6.webp'
import w7 from '../img/w7.webp'
import w8 from '../img/w8.webp'
import w9 from '../img/w9.jpg'
import w10 from '../img/w10.webp'
import w11 from '../img/w11.webp'
import w12 from '../img/w12.webp'




const OurWork = () => {
  return (
<>
<CImage  heading={"our work"}
    img={c6}
    text ={'About Bartel Printing Company, Inc.Our story'}
   />  
   <div className='container-fluid work_img'>
    <div className='row gx-3 gy-2'>
      <div className='col text-center my-5 '>
        <h1>What can we do for you? </h1>
        <p>Your project matters to us. Large or small, traditional or digital—we’ll ensure the highest quality and attention to detail.</p>
        <div className='col work_images d-flex flex-wrap justify-content-around my-5'>
      <figure>
      <h4> unique item</h4>
      <img src={w1} alt='w1 ' className='img-fluid work_img' />
      </figure>

      <figure>
      <h4> perfect bound Books</h4>
      <img src={w2} alt='w2 ' className='img-fluid work_img ' />
      </figure>

      <figure>
      <h4> folded card</h4>
      <img src={w3} alt='w3 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> Annual report</h4>
      <img src={w4} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> bound business presentation</h4>
      <img src={w5} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> business card</h4>
      <img src={w6} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> folding & finishing</h4>
      <img src={w7} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> spiral binding </h4>
      <img src={w8} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> spiral binding </h4>
      <img src={w9} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> direct mail </h4>
      <img src={w10} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4> attachment </h4>
      <img src={w11} alt='w4 ' className='img-fluid work_img'/>
      </figure>

      <figure>
      <h4>  pages </h4>
      <img src={w12} alt='w4 ' className='img-fluid work_img'/>
      </figure>


      </div> 
      </div>

     
    </div>
   </div>
</>
   )
}

export default OurWork