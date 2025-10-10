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
import { openDialog} from '../utils/DialogSlice'
import AddProductDialog from '../component/AddProductDialog'
import AddNewCategory from '../component/AddNewCategory'
import AddSubCategory from '../component/AddSubCategory'
import AddUsers from '../component/AddUsers'

const Users = () => {
const activeDialog=useSelector((state)=>state.dialogReducer.activeDialog)

const dispatch=useDispatch();



  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img src={params.value} alt="product" style={{ width: 70 }} />
      ),
      sortable: false,
      filterable: false,
    },
   
     {
      field: "user_name",
      flex:1,
      headerName: "user_name",
     
    },
    {
      field: "user_email",
      flex:1,
      headerName: "user_email",
     
    },
    {
      field: "user_phone",
      flex:1,
      headerName: "user_phone",
     
    },

    {
      field: "action",
      headerName: "Action",
      width: 130,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div className="flex items-center  mt-4 gap-2">
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
      user_name:"Abhay",
       user_email:"accevateabhay@gmail.com",
        user_phone:"6393216862",
      
      
    },
    
    // Add more products here
  ];
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

        <div>
          <div className='leading-8 p-2'>
            <h1 className='text-[20px] font-bold '>Users</h1>
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
                      <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Users</a>
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
          <button
             onClick={()=>dispatch(openDialog("user"))}
            className="flex items-center gap-2 bg-[#155DFC] text-white rounded-md px-3 py-2 hover:bg-amber-600 transition cursor-pointer"
          >
               
            <FaPlus className="text-[16px]" />
            <span>Add User</span>
          </button>
          { activeDialog==="user" && <AddUsers />}
           
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

export default Users