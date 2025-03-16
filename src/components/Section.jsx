import React from 'react'

function Section() {
  return (
    <main className='section'> 
    <div className='section-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        You are at the right place where you 
        find a quality of products that are 
        comfortable and are in reasonable prices!
          
        </p>
        <div className='section-btn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>

        <div className='shopping'>
         <p>Also Available On </p>

         <div className='brand-icons'>
            <img src="/images/insta_logo.png" alt="instagram-logo" />
            <img src="/images/fb-logo.png" alt="facebook-logo" />

         </div>
        </div>
    </div>
    <div className='section-image'>
    <img src="/images/shoe_image.png" alt="shoe-logo" />

    </div>

    </main>
  )
}

export default Section