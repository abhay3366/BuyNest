import React from 'react'
import useHandleAccordion from '../hooks/useHandleAccordion';
import { FaChevronDown } from 'react-icons/fa';
import OrderStatus from './OrderStatus';

const Orders = () => {
    const { index, handelAccordion } = useHandleAccordion();
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
  return (
    <div>
          <div className="card mx-3 my-3">
                <div className="relative overflow-x-auto  sm:rounded-lg">
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
  )
}

export default Orders