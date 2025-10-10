import { Rating, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddSubCategoryForm = () => {
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
        console.log("da", totalFormData)
    }
    return (
        <section>
            <div className="mx-4 my-4">
                <form>
                    {/* Product Name & Description */}
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div>

                          
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent Category</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                           

                        </div>
                        <div>


                            <label htmlFor="category_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Category Name
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

export default AddSubCategoryForm