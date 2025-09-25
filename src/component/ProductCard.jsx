import { Button, Rating } from '@mui/material'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdGitCompare } from 'react-icons/io'
import { MdZoomOutMap } from 'react-icons/md'
import { Link } from 'react-router'
import { IconButton } from "@mui/material";
const ProductCard = () => {
    return (
        <div className="productItem w-[250px] rounded-md border-1 border-gray-300 shadow-md">
            <div className='imgWrapper group w-[100%]  overflow-hidden relative '>
                <Link to="/">
                    <div className="img h-[250px] overflow-hidden group relative">
                        {/* First Image (fade out on hover) */}
                        <img
                            className="w-full h-full object-contain rounded-md absolute top-0 left-0 opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-0"
                            src="https://www.jiomart.com/images/product/original/rv1zalfbjm/sidhidata-women-s-women-s-crepe-printed-patiyala-salwar-suit-dress-material-suit-sea-green-product-images-rv1zalfbjm-0-202406210004.jpg?im=Resize=(600,750)"
                            alt="Main Product"
                        />

                        {/* Second Image (fade in on hover) */}
                        <img
                            className="w-full h-full object-contain rounded-md absolute top-0 left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                            src="https://www.jiomart.com/images/product/original/rv1zalfbjm/sidhidata-women-s-women-s-crepe-printed-patiyala-salwar-suit-dress-material-suit-sea-green-product-images-rv1zalfbjm-2-202406210004.jpg?im=Resize=(600,750)"
                            alt="Hover Product"
                        />
                    </div>


                </Link>
                <span className='discount flex items-center absolute top-[10px] left-[10px] rounded-[3px] text-[12px] p-1 bg-primary text-white'>18%</span>
                <div className='actions  absolute top-[10px] right-[5px] w-[80px] flex flex-col items-end gap-1 '>
                    <button
                        className="!w-[40px] !h-[40px] flex items-center justify-center !rounded-full bg-gray-100 hover:bg-primary hover:text-white text-black cursor-pointer "
                    >
                        <FaRegHeart />
                    </button>
                    <button className="!w-[40px] !h-[40px] flex items-center justify-center !rounded-full bg-gray-100 hover:bg-primary hover:text-white text-black cursor-pointer"><IoMdGitCompare /></button>
                    <button className="!w-[40px] !h-[40px] flex items-center justify-center !rounded-full bg-gray-100 hover:bg-primary hover:text-white text-black cursor-pointer"><MdZoomOutMap /></button>
                </div>
            </div>
            <div className="info p-3">
                <h5 className='text-[15px]'><Link to="">Green Saree</Link></h5>
                <h3 className='text-[16px] mt-2 font-[500] text-black mb-2'><Link to="/">Lorem ipsum dolor sit amet.</Link></h3>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                <div className="flex items-center gap-3">
                    <span className='oldPrice line-through text-gray-600 font-[500]'>$50</span>
                    <span className='oldPrice  text-red-600 font-[600]'>$70</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard