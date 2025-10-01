import { FaCloudUploadAlt, FaRegUser } from 'react-icons/fa'
import { IoIosLogOut, IoMdHeartEmpty } from 'react-icons/io'
import { IoBagCheckOutline } from 'react-icons/io5'
import { NavLink, useParams } from 'react-router'
const MyAccountSideBar = () => {
    return (
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
                            <button className='w-full flex items-center gap-2 cursor-pointer'><FaRegUser />My Profile</button>
                        </NavLink>
                    </li>
                    <li className='w-full hover:bg-gray-200 p-1'>
                        <NavLink to="/my-list">
                            <button className='w-full flex items-center gap-2 cursor-pointer'><IoMdHeartEmpty />My List</button>
                        </NavLink>
                    </li>
                    <li className='w-full hover:bg-gray-200 p-1'>
                        <NavLink to="/my-order">
                            <button className='w-full flex items-center gap-2 cursor-pointer'><IoBagCheckOutline />My Orders</button>
                        </NavLink>
                    </li>
                    <li className='w-full hover:bg-gray-200 p-1'>
                        <NavLink to="logout">
                            <button className='w-full flex items-center gap-2 cursor-pointer'><IoIosLogOut />Logout</button>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default MyAccountSideBar