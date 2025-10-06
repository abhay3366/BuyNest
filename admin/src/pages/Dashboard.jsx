import React from 'react'

import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Slide from '../component/Slide'
import img1 from "../assets/1.png"
import { FaChevronDown, FaPlus } from 'react-icons/fa'
import useHandleAccordion from '../hooks/useHandleAccordion'
import OrderStatus from '../component/OrderStatus'
import shoes from "../assets/shoes.webp"
import { Link } from 'react-router'
import ProgressBar from '../component/ProgressBar'
import { CiEdit } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from 'react-redux'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'





const Dashboard = () => {
    const orders = [
        {
            orderId: "ORD12345",
            paymentId: "PAY67890",
            products: "Shoes, T-Shirt",
            name: "John Doe",
            phone: "9876543210",
            address: "123, Main Street, Delhi",
            pincode: "110011",
            email: "john@example.com",
            userId: "USR1001",
            status: "pending",
            date: "2025-09-30",
        },
        {
            orderId: "ORD54321",
            paymentId: "PAY98765",
            products: "Watch, Bag",
            name: "Jane Smith",
            phone: "9876501234",
            address: "456, Park Avenue, Mumbai",
            pincode: "400001",
            email: "jane@example.com",
            userId: "USR1002",
            status: "completed",
            date: "2025-09-28",
        }
    ];



    const { index, handelAccordion } = useHandleAccordion();
    const isSideBarOpen = useSelector((state) => state.sideBarReducer.isSideBarOpen);


    return (
        <section className='main'>
            <div className='contentMain flex'>
                {/* Sidebar */}
                <div className={`sidebarWrapper  ${isSideBarOpen ? '-translate-x-full' : 'w-[18%]'} `}>
                    <Sidebar />
                </div>

                {/* Right Content */}
                <div className={`contentRight transition-all ease-in-out duration-500 ${isSideBarOpen ? 'w-[100%]' : 'w-[82%]'}`}>
                    <Header />
                    <div className='py-3 px-3'>
                        {/* Greeting Card */}
                        <div className='w-full p-5 border border-gray-200 flex items-center justify-between gap-8 mb-5'>
                            <div className="info">
                                <h1 className='text-[45px] font-[600] leading-15'>
                                    Good Morning , <br /> Abhay
                                </h1>
                                <p>Here's What happening on your today, See the statistic at once.</p>
                                <button className='bg-blue-500 text-white px-3 py-1 rounded-sm mt-2 flex gap-1 items-center'>
                                    <FaPlus /> Add Product
                                </button>
                            </div>
                            <img src={img1} alt="" className='w-[300px]' />
                        </div>

                        {/* Swiper Section */}
                        <Slide />
                    </div>

                    {/* product */}


                    <div className="card mx-3 ">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-2">
                            <div className='p-2'>


                                <div><h1 className='text-[18px] font-[500] py-3'>Products</h1></div>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose category</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                    </div>
                                    <div>
                                        <button className='bg-amber-100 px-2 py-1 rounded-md cursor-pointer'>Export to Excle</button>
                                    </div>
                                </div>
                            </div>
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Sub Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Brand
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Sales
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Rating
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={shoes} alt="" className='w-[70px]' />
                                        </th>
                                        <td class="px-6 py-4">
                                            <Link to="/products/121" className='hover:text-red-500'>Luft Pace M Running Shoes For Men</Link>
                                        </td>
                                        <td class="px-6 py-4">
                                            Shoes
                                        </td>
                                        <td class="px-6 py-4">
                                            ADIDAS
                                        </td>
                                        <td class="px-6 py-4">
                                            ADIDAS
                                        </td>
                                        <td class="px-6 py-4">
                                            <span className='oldPrice line-through'>2000 </span>
                                            <span className='text-red-600'>1500</span>
                                        </td>
                                        <td class="px-6 py-4 w-[120px]">
                                            <div><span>500 Sales</span>
                                                <ProgressBar variant="determinate" value={50} type={'success'} /></div>
                                        </td>
                                        <td class="px-6 py-4">
                                            4
                                        </td>
                                        <td class="px-6 py-4">
                                            <div className='flex gap-2'>
                                                <Link
                                                    href="#"
                                                    className="flex items-center justify-center text-gray-600 text-xl  hover:bg-gray-300 rounded-full w-[30px] h-[30px]"
                                                >
                                                    <CiEdit />
                                                </Link>

                                                <Link href="#" className="flex items-center justify-center text-gray-600 text-xl hover:bg-gray-300 rounded-full w-[30px] h-[30px]"><IoEyeOutline /></Link>
                                                <Link href="#" className="flex items-center justify-center text-gray-600 text-xl  hover:bg-gray-300 rounded-full w-[30px] h-[30px]"><AiOutlineDelete /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                                <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                    {/* Orders Section */}
                    <div className="card mx-3">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            {/* Header */}
                            <div className='flex items-center justify-between mt-4'>
                                <div className='p-4'>
                                    <h1 className='text-[18px] font-[500]'>Recent Order</h1>
                                </div>
                                <div>
                                    <div className="pb-4 bg-white dark:bg-gray-900 ">
                                        <label htmlFor="table-search" className="sr-only">Search</label>
                                        <div className="relative mt-1">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="table-search"
                                                className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Search for items"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Orders Table */}
                            <div className="pb-4 bg-white dark:bg-gray-900 flex items-center justify-between">
                                <div className=" max-h-[500px] rounded-lg scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <table className="min-w-full text-sm text-left border-collapse">
                                        {/* Table Head */}
                                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider sticky top-0 z-10">
                                            <tr>
                                                <th className="p-3"></th>
                                                <th className="p-3">Order ID</th>
                                                <th className="p-3 whitespace-nowrap">Payment Id</th>
                                                <th className="p-3">Products</th>
                                                <th className="p-3">Name</th>
                                                <th className="p-3">Phone</th>
                                                <th className="p-3">Address</th>
                                                <th className="p-3 text-center">Pincode</th>
                                                <th className="p-3">Email</th>
                                                <th className="p-3 text-center">User Id</th>
                                                <th className="p-3 text-center">Status</th>
                                                <th className="p-3">Date</th>
                                            </tr>
                                        </thead>

                                        {/* Table Body */}
                                        <tbody className="divide-y divide-gray-100">
                                            {orders.map((item, clickIndex) => (
                                                <React.Fragment key={clickIndex}>
                                                    {/* Row */}
                                                    <tr className="hover:bg-gray-50 transition">
                                                        <td className="p-3">
                                                            <button
                                                                onClick={() => handelAccordion(clickIndex)}
                                                                className="p-2 rounded-full hover:bg-gray-200 transition"
                                                            >
                                                                <FaChevronDown
                                                                    className={`text-gray-600 text-sm transition-transform duration-300 ${clickIndex === index ? "rotate-180" : ""
                                                                        }`}
                                                                />
                                                            </button>
                                                        </td>
                                                        <td className="p-3">{item.orderId}</td>
                                                        <td className="p-3">{item.paymentId}</td>
                                                        <td className="p-3 whitespace-nowrap">{item.products}</td>
                                                        <td className="p-3 whitespace-nowrap">{item.name}</td>
                                                        <td className="p-3">{item.phone}</td>
                                                        <td className="p-3 whitespace-nowrap">{item.address}</td>
                                                        <td className="p-3 text-center">{item.pincode}</td>
                                                        <td className="p-3">{item.email}</td>
                                                        <td className="p-3 text-center">{item.userId}</td>
                                                        <td className="p-3 text-center">
                                                            <OrderStatus status={item.status} />
                                                        </td>
                                                        <td className="p-3 whitespace-nowrap">{item.date}</td>
                                                    </tr>

                                                    {/* Accordion Row */}
                                                    <tr>

                                                        <td colSpan={12} className="p-0">
                                                            <div
                                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${clickIndex === index ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
                                                                    }`}
                                                            >
                                                                <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4">
                                                                    <h3 className="font-medium text-gray-700 mb-3">
                                                                        Product Details
                                                                    </h3>
                                                                    <table className="w-full text-sm">
                                                                        <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
                                                                            <tr>
                                                                                <th className="p-2">Product Id</th>
                                                                                <th className="p-2">Title</th>
                                                                                <th className="p-2">Image</th>
                                                                                <th className="p-2">Quantity</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="p-2">PRD001</td>
                                                                                <td className="p-2">Shoes</td>
                                                                                <td className="p-2">
                                                                                    <img
                                                                                        src="https://via.placeholder.com/40"
                                                                                        alt="product"
                                                                                        className="w-10 h-10 rounded object-cover"
                                                                                    />
                                                                                </td>
                                                                                <td className="p-2">1</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
