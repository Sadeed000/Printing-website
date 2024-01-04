import React from 'react'
import Common from './Common'
import s2 from '../img/s2.jpg'
import s1 from '../img/s1.webp'
import s3 from '../img/s3.webp'
import s8 from '../img/s8.webp'
import s9 from '../img/s9.webp'
import s10 from '../img/s10.webp'
import Heading from './Heading'
import CImage from './CImage'
import c4 from '../img/c4.webp'
import service4 from '../img/service4.webp'

const Services = () => {
  return (
    <>
 <CImage  heading={"Printing & Binding"}
    img={c4}
    text ={'Find the service that fits your needs'}/>

    <div className='container'>
      <div className='row '>
      <Heading text={'design & print'} />
      <p>When you choose to print or design with us, we use our state-of-the-art technology to deliver the highest quality results. Take a look at some of the printing and design services we offer below.</p>
        <div className='col-12 col-md-5 col-xxl-6 col-lg-6 '>
        <ul>
          <li>Brochures</li>
          <li>Business card</li>
          <li>Envelopes</li>
          <li>Menus</li>
          <li>Post Cards</li>
          <li>Table Tents</li>
          <li>Wedding Invites</li>
          <li>Invoices</li>
          <li>Multi-Layer Pieces</li>
          <li>Manuals</li>
          <li>Flyers and Posters</li>
          <li>Bulletins</li>
          <li>Bulk Mailings</li>
        </ul>
        </div>

        <div className='col-12 col-md-5 col-xxl-6 col-lg-6'>
        <ul>
          <li>Coupons</li>
          <li>Daily Cash Reports</li>
          <li>Inventory Reports</li>
          <li>Paperback Books</li>
          <li>Handbills</li>
          <li>Calendars</li>
          <li>Order Forms/Change Order</li>
          <li>Banners</li>
          <li>Checks</li>
          <li>Catalogs</li>
          <li>Corporate Identity Design</li>
          <li>Logo Design</li>
          <li>Logo Design</li>
        </ul>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col my-5'>
          <img src={service4} alt='' className='img-fluid' width='100%' style={{height:'16rem'}} />
        </div>
      </div>
      
    </div>-
    <div className='container'>
        <div className='row'>
        <Heading text='binding'/>
        <p className='mb-5'> With our binding services, you can expect excellence. Whatever type of binding you need, we work with you to ensure the<br></br> completed project is everything you hoped it would be.</p>

          <div className='col-5'>
      <ul>
        <li>Coil Binding</li>
        <li>Coil Binding</li>
        <li>Perfect Binding</li>

      </ul>
          </div>

          <div className='col-5'>
              <ul>
            <li>Saddle Stitching</li>
            <li>Coil Binding</li>
            <li>Spiral Binding</li>
    
          </ul>
              </div>

        </div>
      </div>
    
        <Heading  text={'Our Services'}/>
     <div className='container-fluid'>
        <div className='row gx-3 gy-2 d-flex'>
        
    <Common Services={  'Printing Services'} 
      text ={'No Project is too big or small. Our State-of-the-art shop offers both traditional and didgital printing to meet all your needs'}
      img ={s2}
     />
    <Common Services={  'Binding Services'} 
      text ={'No Project is too big or small. Our State-of-the-art shop offers both traditional and didgital printing to meet all your needs'}
      img ={s1}


    />
    <Common Services={'Desing Services'} 
      text ={'No Project is too big or small. Our State-of-the-art shop offers both traditional and didgital printing to meet all your needs'}
      img ={s3}


    />
    <Common Services={  'Customer Services'} 
      text ={'No Project is too big or small. Our State-of-the-art shop offers both traditional and didgital printing to meet all your needs'}
      img ={s8}


    />
    <Common Services={ 'Superior Quality'} 
      text ={'No Project is too big or small. Our State-of-the-art shop offers both traditional and didgital printing to meet all your needs'}
      img ={s9}

    />
    <Common Services={  'Eco Friendly'} 
      text ={'No Project is too big or small. Our State-of-the-art shop offers both traditional and didgital printing to meet all your needs'}
      img ={s10}

    />
    

 

    </div>
    </div>
    </>
  )
}

export default Services