import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
import Slide from '../component/Slide'
import { PiHandWaving } from 'react-icons/pi'
import img1 from "../assets/1.png"
import Button from '@mui/material/Button'
import { FaChevronDown, FaPlus } from 'react-icons/fa'
import useHandleAccordion from '../hooks/useHandleAccordion'
import OrderStatus from '../component/OrderStatus'

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
    return (
        <section className='main'>
            <div className='contentMain flex'>
                <div className="sidebarWrapper w-[18%]  bg-amber-400">
                    <Sidebar />
                </div>
                <div className='contentRight  w-[82%]'>
                    <Header />
                    <div className='py-3 px-3'>
                        <div className='w-full p-5 border border-gray-200 flex items-center justify-between gap-8 mb-5'>
                            <div className="info">
                                <h1 className='text-[45px] font-[600] leading-15'>Good Morning , <br /> Abhay</h1>
                                <p>Here's What happening on your today, See the statistic at once.</p>
                                <button className='   bg-blue-500 text-white px-3 py-1 rounded-sm mt-2 !important flex gap-1 items-center'><FaPlus /> Add Product</button>
                                {/* <PiHandWaving className='text-yellow-500 text-[25px]'/> */}
                            </div>
                            <img src={img1} alt="" className='w-[300px]' />
                        </div>
                        <Slide />
                    </div>
                    <div className="card mx-3">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className='flex items-center justify-between'>
                                <div className='p-2'>
                                    <h1 className='text-[18px] font-[500]'>Recent Order</h1>
                                </div>
                                <div>
                                    <div class="pb-4 bg-white dark:bg-gray-900">
                                        <label for="table-search" class="sr-only">Search</label>
                                        <div class="relative mt-1">
                                            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pb-4 bg-white dark:bg-gray-900 flex items-center justify-between">

                                <div>
                                    <label for="table-search" class="sr-only">Search</label>
                                    {/* Orders Table */}
                                    <div className="overflow-x-auto max-h-[500px] rounded-lg scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                        <table className="min-w-full text-sm text-left border-collapse">
                                            {/* Table Head */}
                                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider sticky top-0 z-10">
                                                <tr>
                                                    <th className="p-3"></th>
                                                    <th className="p-3">Order ID</th>
                                                    <th className="p-3">Payment Id</th>
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
                                                    <>
                                                        <tr key={clickIndex} className="hover:bg-gray-50 transition">
                                                            <td className="p-3">
                                                                <button
                                                                    onClick={() => handelAccordion(clickIndex)}
                                                                    className={`p-2 rounded-full hover:bg-gray-200 transition ${clickIndex === index ? "rotate-180" : ""
                                                                        }`}
                                                                >
                                                                    <FaChevronDown className="text-gray-600 text-sm transition-transform" />
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

                                                        {/* Accordion Content */}
                                                        {clickIndex === index && (
                                                            <tr className="bg-gray-50">
                                                                <td></td>
                                                                <td colSpan={11} className="p-4">
                                                                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
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
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
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