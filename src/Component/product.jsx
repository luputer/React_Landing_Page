import React from 'react'
import products from '../data'
import Gambar from '../assets/download.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Product({}) {

  return (
    <div>
       <h1  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="false" className='font-bold text-[rgb(56,125,220)] text-3xl text-center font-poppins hover:underline underline-offset-4'>Daftar Product</h1>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">  
        {products.map((item) => 
         <div data-aos="fade-up" data-aos-duration="1000"  className="bg-white rounded-lg shadow-md p-6" key={item.id}>  
         <h2 className="text-center font-sans">{item.name}</h2>  
         <p>{item.description}</p>
         <picture className='blok overflow-hidden'>          
         <LazyLoadImage
          src={Gambar} alt={item.name} 
          className='rounded-lg hover:scale-125 ease-in-out duration-200'
         /> 
         </picture>
         <div className="flex justify-between items-center pt-4">
         <div className="text-blue-500 font-semibold  text-end">{item.price}</div>  
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">  
           READ MORE  
         </button>  
         </div>
       </div>
        )}
      </div>      
    </div>
  )
}

export default Product
