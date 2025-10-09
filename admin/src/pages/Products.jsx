import React from 'react'
import FilterButton from '../component/FilterButton'
import { MdStorefront } from 'react-icons/md'
import { Link } from 'react-router'
import { FaEdit, FaEye, FaFileExport, FaPlus, FaTrash } from 'react-icons/fa'
import { Box, Button, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import SearchBox from '../component/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../utils/DialogSlice'
import Dialoge from '../component/Dialoge'

const Products = () => {
const isDialogOpen=useSelector((state)=>state.dialogReducer.isDialogOpen)
const dispatch=useDispatch();

  
const renderRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return <div className="flex items-center justify-center">{stars}</div>;
};

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img src={params.value} alt="product" style={{ width: 70 }} />
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 250,
    },
    { field: "category", headerName: "Category", width: 130 },
    { field: "subCategory", headerName: "Sub Category", width: 130 },
    { field: "brand", headerName: "Brand", width: 130 },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      renderCell: (params) => (
        <span>
          {params.value.old && (
            <span style={{ textDecoration: "line-through", marginRight: 5 }}>
              ₹{params.value.old}
            </span>
          )}
          <span style={{ color: "red" }}>₹{params.value.current}</span>
        </span>
      ),
    },
    {
      field: "sales",
      headerName: "Sales",
      width: 120,
      renderCell: (params) => (
        <span className={params.value > 400 ? "text-green-600 font-bold" : ""}>
          {params.value.toLocaleString()} units
        </span>
      ),
    },

    {
      field: "rating",
      headerName: "Rating",
      width: 120,
      renderCell: (params) => renderRating(params.value),
      sortable: false,
      filterable: false,
    },

    {
      field: "action",
      headerName: "Action",
      width: 130,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div className="flex items-center justify-center mt-4 gap-2">
          {/* View */}
          <button
            onClick={() => navigate(`/products/${params.row.id}`)}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            title="View"
          >
            <FaEye />
          </button>

          {/* Edit */}
          <button
            onClick={() => navigate(`/products/edit/${params.row.id}`)}
            className="text-green-500 hover:text-green-700 cursor-pointer"
            title="Edit"
          >
            <FaEdit />
          </button>

          {/* Delete */}
          <button
            onClick={() => handleDelete(params.row)}
            className="text-red-500 hover:text-red-700 cursor-pointer"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      image: "",
      productName: "Luft Pace M Running Shoes For Men",
      category: "Shoes",
      subCategory: "Sports",
      brand: "ADIDAS",
      price: { old: 2000, current: 1500 },
      sales: 500,
      rating: 4,
    },
    {
      id: 2,
      image: "",
      productName: "Nike Air Zoom Pegasus",
      category: "Shoes",
      subCategory: "Sports",
      brand: "NIKE",
      price: { old: 2500, current: 2000 },
      sales: 300,
      rating: renderRating(4.5),
    },
    // Add more products here
  ];
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

        <div>
          <div className='leading-8 p-2'>
            <h1 className='text-[20px] font-bold '>Products</h1>
            <span >

              <nav class="flex" aria-label="Breadcrumb" >
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li class="inline-flex items-center">
                    <Link to="" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                      <span className='flex gap-2 items-center'> <MdStorefront />
                        E-Commerce</span>
                    </Link>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div class="flex items-center">
                      <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">List</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </span>
          </div>

        </div>
        <div className="flex items-center gap-3">
          {/* Export Button */}
          <Link
            to="/export"
            className="flex items-center gap-2 border-1 border-gray-200 text-gray-500 rounded-md px-3 py-2 hover:bg-gray-50 transition"
          >
            <FaFileExport className="text-[16px]" />
            <span>Export</span>
          </Link>

          {/* Add Product Button */}
          <Link
            onClick={()=>dispatch(toggle())}
            className="flex items-center gap-2 bg-[#155DFC] text-white rounded-md px-3 py-2 hover:bg-amber-600 transition"
          >
               
            <FaPlus className="text-[16px]" />
            <span>Add Product</span>
          </Link>
          {isDialogOpen && <Dialoge />}
        </div>
      </div>

      <div class="flex flex-column sm:flex-row flex-wrap p-2 space-y-4 sm:space-y-0 items-center justify-between pb-4">

        <div>
          <SearchBox/>
        </div>
        <FilterButton />
      </div>
      <div className='card py-3 px-3'>

        <Paper sx={{ height: 500, width: "100%", p: 2 }}>
          {/* Top Buttons */}


          {/* DataGrid */}
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10]}
            checkboxSelection

            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </div>

  )
}

export default Products