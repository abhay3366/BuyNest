import { Button, TextField } from '@mui/material'
import React from 'react'
import { FaCloudUploadAlt, FaRegUser } from 'react-icons/fa'
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io'
import { IoBagCheckOutline } from 'react-icons/io5'
import { NavLink } from 'react-router'



const MyAccount = () => {
    return (
        <section className='py-10 w-full'>
            <div className="container flex gap-5">
                <div className="col1 w-[20%]">
                    <div className="card bg-white shadow-md rounded-md ">
                        <div className="w-full p-3 flex items-center justify-center flex-col">
                            <div className='w-[110] h-[110] rounded-full overflow-hidden mb-4 relative group'>
                                <img src="https://avatars.githubusercontent.com/u/68136960?v=4" className='w-full h-full object-cover' alt="" srcset="" />

                                <div className='overlay cursor-pointer w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100'>
                                    <FaCloudUploadAlt className='text-white text-[25px]' />
                                    <input type="file" name="" className='absolute top-0 left-0 w-full h-full opacity-0' id="" />
                                </div>
                            </div>
                            <h3 className=' text-[16px] medium font-[500]'>Abhay Kant Tiwari</h3>
                            <h6 className='text-[13px] text-gray-600'>tabhaykant1@gmail.com</h6>
                        </div>

                        <ul className='list-none leading-7 '>
                             <li className='w-full hover:bg-gray-200 p-1'>
                               <NavLink to="/my-account" >
                                 <button className='w-full flex items-center gap-2 cursor-pointer'><FaRegUser/>My Profile</button>
                               </NavLink>
                            </li>
                            <li className='w-full hover:bg-gray-200 p-1'>
                                <NavLink to="/my-list">
                                    <button className='w-full flex items-center gap-2 cursor-pointer'><IoMdHeartEmpty/>My List</button>
                                </NavLink>
                            </li>
                            <li className='w-full hover:bg-gray-200 p-1'>
                                <NavLink to="/my-order">
                                    <button className='w-full flex items-center gap-2 cursor-pointer'><IoBagCheckOutline/>My Orders</button>
                                </NavLink>
                            </li>
                            <li className='w-full hover:bg-gray-200 p-1'>
                                <NavLink to="logout">
                                    <button className='w-full flex items-center gap-2 cursor-pointer'><IoIosLogOut/>Logout</button>
                                </NavLink>
                            </li>
                          
                        </ul>
                    </div>
                </div>
                <div className="col2 w-[50%]">
                    <div className="card bg-white p-5 shadow-md rounded-md">
                        <h2 className='pb-3'>My Profile</h2>
                        <hr />
                        <form action="" className='mt-5'>
                            <div className="flex items-center gap-5">
                                <div className='w-[50%]'>
                                        <TextField label="Full Name" variant='outlined' size='small'>
                                        </TextField>
                                </div>
                                <div className='w-[50%]'>
                                        <TextField label="Email" variant='outlined' size='small'>
                                        </TextField>
                                </div>
                                <div className='w-[50%]'>
                                        <TextField label="Phone Number" variant='outlined' size='small'>
                                        </TextField>
                                </div>

                            </div>
                            <div className='flex justify-center gap-2 mt-3'>
                                <Button className=' !bg-green-700 !btn-lg !text-white w-[100px]'>Save</Button>
                                <Button className=' !bg-red-700 !btn-lg !text-white w-[100px]'>Cancel</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MyAccount