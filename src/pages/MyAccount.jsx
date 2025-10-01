import { Button, TextField } from '@mui/material'
import React from 'react'
import { FaCloudUploadAlt, FaRegUser } from 'react-icons/fa'
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io'
import { IoBagCheckOutline } from 'react-icons/io5'
import { NavLink, useParams } from 'react-router'
import MyAccountSideBar from '../component/MyAccountSideBar'



const MyAccount = () => {

    return (
        <section className='py-10 w-full bg-[#F1F3F6]'>
            <div className="container flex gap-5">
               <MyAccountSideBar/>
                <div className="col2 w-[80%]">
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