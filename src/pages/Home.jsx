import React from 'react'
import HomeSlider from '../component/HomeSlider'
import CartSlider from '../component/HomeCartSlider'
import { LiaShippingFastSolid } from 'react-icons/lia'
import AddBannerSlider from '../component/AddBannerSlider'

const Home = () => {
  return (
    <div style={{background:"#F7F4CA"}}>
      <HomeSlider/>
      <CartSlider/>
      <section className='py-18 bg-white w-[80%]'>
        <div className="container">
          <div className="freeShipping w-full p-4 py-2 flex items-center justify-between border-2 border-red-600 rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className='text-[50px]'/>
              <span className='text-[20px] font-[600]'>Free Shipping</span>
            </div>
            <div className="col2">
              <p className='mb-0 font-[500]'>Free delivery now on your first order and over $200</p>
            </div>
            <p className='font-bold text-[25px]'>- Only $2000</p>
          </div>
        </div>
      </section>
      <AddBannerSlider/>
    </div>
  )
}

export default Home
