import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, NavLink } from 'react-router';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
const ProductListing = () => {

    const [index, setIndex] = useState(0)
    const [price,setPrice]=useState("110")
    const data = [
        {
            title: "Shop By Category",
            options: ["Fashion", "Jewellery", "Beauty", "Bag", "Footwear"]
        },
        {
            title: "Availability",
            options: ["Availability", "InStock", "Not Available"]
        },
        {
            title: "Size",
            options: ["Small", "Medium", "Large", "XL", "XXl"]
        },

        {
            title: "Customer Rating",
            options: ["4★ & above", "3★ & above", "2★ & above", "2★ & above"]
        },
        {
            title: "Discount",
            options: ["80% or more", "70% or more", "60% or more", "50% or more", "40% or more"]
        }

    ]
    const handelAccordion = (clickIndex) => {

        setIndex(index == clickIndex ? null : clickIndex)
    }
    const handlePrice=(e)=>{
      setPrice(e.target.value)
    }

    return (
        <>
            <div className=' bg-gray-200 mb-2'>
                <div role="presentation" className='container py-4'>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>

                        <Link
                            underline="hover"
                            className='font-[600]'
                            href="/material-ui/react-breadcrumbs/"
                            aria-current="page"
                        >
                            Fashion
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <div className='flex justify-between mx-1'>
                <div className='w-[20%] border-1 border-gray-300 '>
                    <Box><h1 className='text-[18px] font-[600] p-3'>Filter</h1></Box>
                    <Divider />
                    <div className='pl-3'>
                        {
                            data.map((item, clickIndex) => (
                                <div>
                                    <button className='rgba(0,0,0,0.9) font-[500] cursor-pointer w-full text-left flex items-center justify-between py-3' onClick={() => handelAccordion(clickIndex)}>{item.title}
                                        {clickIndex == index ? <IoIosArrowUp /> : <IoIosArrowDown />} </button>
                                    <Divider />
                                    <ul>
                                        {
                                            clickIndex == index && item.options.map((el) => (<li className='list-none transition-all ease-linear font-light'><FormControlLabel className='customCheck' control={<Checkbox
                                                sx={{
                                                    "&.Mui-checked": {
                                                        color: "#ff5252",   // tick color when checked
                                                    },
                                                    color: "gray",    // color when unchecked
                                                }}
                                            />} label={el} /></li>))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                        <div className='flex flex-col mt-4'>
                            <label for="price" >Price</label>
                            <input type="range" onChange={handlePrice} name="price"  className='accent-primary w-full px-2' id="price" min="100" max="5000" />
                            <div className='flex justify-between items-center w-full p-1'>
                                <div className=' border-1 border-gray-300 p-1 min-w-[100px]'>100</div> to
                                <div className=' border-1 border-gray-300 p-1 min-w-[100px]'>{price}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-[79%] border-1 border-gray-300 '>
                    <div className='flex gap-3 border-b-1 border-gray-300 p-3'>
                        <h3 className='font-[600]'>Sort By</h3>
                        <NavLink className="!text-black">Price -- Low to High</NavLink>
                        <NavLink className="!text-black">Price -- High to Low</NavLink>
                       
                    </div>
                  
                </div>
               
            </div>
        </>
    )
}

export default ProductListing