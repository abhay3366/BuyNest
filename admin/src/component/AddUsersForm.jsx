import { Rating, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddUsersForm = () => {
    const [totalFormData, setTotalFormData] = useState([]);
    const [formData, setFormData] = useState({
        category_name: "",
        product_image: ""
    })
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;
        if (name === "product_image") {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

    }
    const handleForm = (e) => {
        e.preventDefault();
        setTotalFormData((prev) => [...prev, formData]);
       
    }
    return (
        <section>
            <div className="mx-4 my-4">
                <form>
                    {/* Product Name & Description */}
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div>
                            <label htmlFor="category_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Users Name
                            </label>
                            <input
                                type="text"
                                name="category_name"
                                value={formData.category_name}
                                onChange={handleChange}
                                id="category_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>

                    </div>
                    {/* File Upload */}
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div>
                            <label htmlFor="product_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                File Upload
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    htmlFor="product_image"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input
                                        id="product_image"
                                        name="product_image"
                                        type="file"
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        onClick={handleForm}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddUsersForm