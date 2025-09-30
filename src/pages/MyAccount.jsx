import { Button } from '@mui/material'
import React from 'react'
import { FaCloudUploadAlt, FaRegUser } from 'react-icons/fa'
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io'
import { IoBagCheckOutline } from 'react-icons/io5'

const MyAccount = () => {
    return (
        <section className='py-10 w-full'>
            <div className="container flex gap-5">
                <div className="col1 w-[25%]">
                    <div className="card bg-white shadow-md rounded-md p-5">
                        <div className="w-full p-3 flex items-center justify-center flex-col">
                            <div className='w-[110] h-[110] rounded-full overflow-hidden mb-4 relative group'>
                                <img src="https://avatars.githubusercontent.com/u/68136960?v=4" className='w-full h-full object-cover' alt="" srcset="" />

                                <div className='overlay cursor-pointer w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100'>
                                    <FaCloudUploadAlt className='text-white text-[25px]' />
                                    <input type="file" name="" className='absolute top-0 left-0 w-full h-full opacity-0' id="" />
                                </div>
                            </div>
                            <h3 className='medium font-[500]'>Abhay Kant Tiwari</h3>
                        </div>

                        <ul className='list-none leading-8'>
                             <li className='w-full'>
                                <button className='w-full flex items-center gap-2 cursor-pointer'><FaRegUser/>My Profile</button>
                            </li>
                            <li className='w-full'>
                                <button className='w-full flex items-center gap-2 cursor-pointer'><IoMdHeartEmpty/>My List</button>
                            </li>
                            <li className='w-full'>
                                <button className='w-full flex items-center gap-2 cursor-pointer'><IoBagCheckOutline/>My Orders</button>
                            </li>
                            <li className='w-full'>
                                <button className='w-full flex items-center gap-2 cursor-pointer'><IoIosLogOut/>Logout</button>
                            </li>
                          
                        </ul>
                    </div>
                </div>
                <div className="col1 w-[75%]"></div>

            </div>
        </section>
    )
}

export default MyAccount