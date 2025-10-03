import React from 'react'
import { Link } from 'react-router'
import logo from "../assets/logo1.svg"
import Button from '@mui/material/Button'
import { MdDashboard } from "react-icons/md";
import { FaImage,FaRegUserCircle,FaProductHunt, FaAngleDown  } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[white] w-[18%] h-full border-r-2  border-gray-200 p-2">
        <div className='py-2 w-full'>
          <Link to="">
            <img src={logo} className='w-[90%]' alt="" />
          </Link>
        </div>
       <ul className="space-y-1">
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <MdDashboard className="text-[18px]" />
          Dashboard
        </Button>
      </li>
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <FaImage className="text-[18px]" />
          Home Slides
          <FaAngleDown className='ml-auto'/>
        </Button>
      </li>
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <FaRegUserCircle className="text-[18px]" />
          Users
        </Button>
      </li>
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <FaProductHunt className="text-[18px]" />
          Products
           <FaAngleDown className='ml-auto'/>
        </Button>
      </li>
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <TbCategory className="text-[18px]" />
          Category
           <FaAngleDown className='ml-auto'/>
        </Button>
      </li>
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <IoBagHandleOutline className="text-[18px]" />
          Orders
           <FaAngleDown className='ml-auto'/>
        </Button>
      </li>
      <li>
        <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
          <IoIosLogOut className="text-[18px]" />
          Logout
        </Button>
      </li>
    </ul>
      </div>
    </>
  )
}

export default Sidebar