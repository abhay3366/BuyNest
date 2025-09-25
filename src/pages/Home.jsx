import React, { useState } from 'react'
import HomeSlider from '../component/HomeSlider'
import CartSlider from '../component/HomeCartSlider'
import { LiaShippingFastSolid } from 'react-icons/lia'
import AddBannerSlider from '../component/AddBannerSlider'
import watch from "../assets/watch.png"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../component/ProductSlider'
import Blog from '../component/Blog'

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ background: "#F7F4CA" }}>
      <HomeSlider />
      <CartSlider />
      {/* POPULAR PRODUCT */}
      <section className='bg-white py-8'>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className='font-[600] text-[20px]'>Popular Product</h2>
              <p>Do not miss  the current offer  until end of November</p>
            </div>
            <div className="rightSec">
              <Box sx={{ maxWidth: { xs: 320, sm: 768 }, bgcolor: 'background.paper' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronic" />
                  <Tab label="Grocery" />
                  <Tab label="Beauty" />
                  <Tab label="Jewellery" />
                  <Tab label="Footwear" />
                  <Tab label="Wellness" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductSlider items={5}/>
        </div>
      </section>
      <section className='py-8 bg-white '>
        <div className="container">
          <div className="freeShipping w-full p-4 py-2 flex items-center justify-between border-2 border-red-600 rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className='text-[50px]' />
              <span className='text-[20px] font-[600]'>Free Shipping</span>
            </div>
            <div className="col2">
              <p className='mb-0 font-[500]'>Free delivery now on your first order and over $200</p>
            </div>
            <p className='font-bold text-[25px]'>- Only $2000</p>
          </div>
        </div>
      </section>
      <AddBannerSlider />
      {/* LATEST PRODUCT */}
      <section className='bg-white py-8'>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className='font-[600] text-[20px]'>Latest Products</h2>
            </div>
          </div>
          <ProductSlider items={5}/>
        </div>
      </section>
      <section className='bg-white'>
        <div className="container">
          <img src={watch} alt="" />
        </div>
      </section>
      {/* Featured Product */}
       <section className='bg-white py-8'>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className='font-[600] text-[20px]'>Featured Products</h2>
            </div>
          </div>
          <ProductSlider items={5}/>
        </div>
      </section>
      <AddBannerSlider />
      {/* Deal of the day */}
       <section className='bg-white py-8'>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className='font-[600] text-[20px]'>Deal Of The Day</h2>
            </div>
          </div>
          <ProductSlider items={5}/>
        </div>
      </section>
     {/* blog card */}
      <Blog/>
      
    </div>
  )
}

export default Home
