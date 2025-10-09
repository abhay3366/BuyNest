import { Rating, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddProduct = () => {
  const [totalFormData, setTotalFormData] = useState([]);
    const [formData, setFormData] = useState({
        product_name: "",
        product_description: "",
        product_category: "",
        product_subcategory: "",
        product_price: "",
        product_old_price: "",
        is_featured: "",
        product_stock: "",
        product_brand: "",
        product_discount: "",
        has_weight: "",
        product_weight: "",
        product_size: "",
        rating: "",
        product_image: ""

    })
    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value,files}=e.target;
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
   console.log(formData)
  
    const handleForm=(e)=>{
        e.preventDefault();
         setTotalFormData((prev) => [...prev, formData]);
         console.log("da",totalFormData)
    }
    return (
     <section>
  <div className="mx-4 my-4">
    <form>
      {/* Product Name & Description */}
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            id="product_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="product_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Description
          </label>
          <textarea
            name="product_description"
            id="product_description"
            value={formData.product_description}
            onChange={handleChange}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your description here..."
          ></textarea>
        </div>
      </div>

      {/* Category & Prices */}
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div>
          <label htmlFor="product_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Category
          </label>
          <select
            name="product_category"
            id="product_category"
            value={formData.product_category}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose...</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div>
          <label htmlFor="product_subcategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Sub Category
          </label>
          <select
            name="product_subcategory"
            id="product_subcategory"
            value={formData.product_subcategory}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose...</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div>
          <label htmlFor="product_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Price
          </label>
          <input
            type="text"
            name="product_price"
            id="product_price"
            value={formData.product_price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="product_old_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Old Price
          </label>
          <input
            type="text"
            name="product_old_price"
            id="product_old_price"
            value={formData.product_old_price}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>

      {/* Stock, Brand, Discount */}
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div>
          <label htmlFor="is_featured" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Is Featured?
          </label>
          <select
            name="is_featured"
            id="is_featured"
            value={formData.is_featured}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        <div>
          <label htmlFor="product_stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Stock
          </label>
          <input
            type="text"
            name="product_stock"
            id="product_stock"
            value={formData.product_stock}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="product_brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Brand
          </label>
          <input
            type="text"
            name="product_brand"
            id="product_brand"
            value={formData.product_brand}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="product_discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Discount
          </label>
          <input
            type="text"
            name="product_discount"
            id="product_discount"
            value={formData.product_discount}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>

      {/* Weight, Size, Rating */}
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <div>
          <label htmlFor="has_weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Weight?
          </label>
          <select
            name="has_weight"
            id="has_weight"
            value={formData.has_weight}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        <div>
          <label htmlFor="product_weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Weight
          </label>
          <input
            type="text"
            name="product_weight"
            id="product_weight"
            value={formData.product_weight}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="product_size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Size
          </label>
          <input
            type="text"
            name="product_size"
            id="product_size"
            value={formData.product_size}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
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

export default AddProduct