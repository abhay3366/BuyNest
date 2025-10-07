import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
// import shoes from "../assets/shoes.png"; // example image path

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
  { field: "sales", headerName: "Sales", width: 120 },
  { field: "rating", headerName: "Rating", width: 90 },
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
    rating: 5,
  },
  // Add more products here
];

export default function ProductsDataTable() {
  
  return (
    <div className='card py-3 px-3'>
      <div class="relative overflow-x-auto  sm:rounded-lg p-2">
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
            <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          flexWrap="wrap"
          gap={2}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#10B981",
              color: "white",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { backgroundColor: "#059669" },
            }}
          >
            <FaPlus size={14} />
            Add Product
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FEF3C7",
              color: "black",
              textTransform: "none",
              "&:hover": { backgroundColor: "#FDE68A" },
            }}
          >
            Export to Excel
          </Button>
        </Box>
          </div>
        </div>
      </div>
      <Paper sx={{ height: 500, width: "100%", p: 2 }}>
        {/* Top Buttons */}
        

        {/* DataGrid */}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
