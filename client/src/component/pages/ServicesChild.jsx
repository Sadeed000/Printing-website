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
import c1 from '../img/c1.jpg'

const ServicesChild = () => {
  return (
    <>
    <div className='container'>
      <div className='row'>
         <div className='col'>
        
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

export default ServicesChild