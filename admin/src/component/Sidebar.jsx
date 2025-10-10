import { Link } from 'react-router'
import logo from "../assets/logo1.svg"
import Button from '@mui/material/Button'
import { MdDashboard } from "react-icons/md";
import { FaImage, FaRegUserCircle, FaProductHunt, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

import useSingleAccordion from '../hooks/useSingleAccordion';
import { useDispatch, useSelector } from 'react-redux';
import AddProductDialog from './AddProductDialog';
import { openDialog } from '../utils/DialogSlice';
import AddNewCategory from './AddNewCategory';
// import { toggle } from '../utils/DialogSlice';

const Sidebar = () => {
  const homeSlider = useSingleAccordion();
  const product = useSingleAccordion();
  const category = useSingleAccordion();
  const order = useSingleAccordion();
  
 const isSideBarOpen=useSelector((state)=>state.sideBarReducer.isSideBarOpen)
 const isDialogOpen=useSelector((state)=>state.dialogReducer.isDialogOpen)
 const activeDialog=useSelector((state)=>state.dialogReducer.activeDialog)
 const dispatch=useDispatch();
  return (
    <><div className={`sidebarWrapper  ${isSideBarOpen ? '-translate-x-full' : 'w-[18%]'} `}>
      <div  className={`sidebar fixed top-0 left-0 transition-all ease-in-out duration-500   bg-[white] ${isSideBarOpen ? '-translate-x-full':'w-[18%]'} h-full border-r-2  border-gray-200 p-2`}>
        <div className='py-2 w-full'>
          <Link to="">
            <img src={logo} className='w-[90%]' alt="" />
          </Link>
        </div>
        <ul className="space-y-1 list">
          <li>
            <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <MdDashboard className="text-[18px]" />
              Dashboard
            </Button>
          </li>
          <li onClick={() => homeSlider.handelToggleAccordion()}>
            <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <FaImage className="text-[18px]" />
              Home Slides
              {homeSlider.allowSingleAccordion ? <FaAngleUp className='ml-auto'/> : <FaAngleDown className='ml-auto' />}
             
            </Button>
            {
              <ul
                className={`overflow-hidden transition-all w-full list-disc list-outside duration-700 ease-in-out  ${homeSlider.allowSingleAccordion ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                    <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  <Link
                    to="/homeSlider/list"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Home Banner List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Add Home Banner List
                  </Link>
                </li>
                
              </ul>
            }

          </li>
          <li>
           <Link to="/users">
             <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <FaRegUserCircle className="text-[18px]" />
              Users
            </Button>
           </Link>
          </li>
          <li onClick={() => product.handelToggleAccordion()}>
            <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <FaProductHunt className="text-[18px]" />
              Products
              {product.allowSingleAccordion ? <FaAngleUp className='ml-auto'/> : <FaAngleDown className='ml-auto' />}
            </Button>
            {
              <ul
                className={`overflow-hidden transition-all duration-700 ease-in-out ${product.allowSingleAccordion ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Product List
                  </Link>
                </li>
                <li>
                  <Link
                    
                    // onClick={()=>dispatch(open())}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Product Upload
                  </Link>
                  {isDialogOpen && <AddProductDialog />}
                </li>
               
              </ul>
            }
          </li>
          <li onClick={() => category.handelToggleAccordion()}>
            <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <TbCategory className="text-[18px]" />
              Category
             {category.allowSingleAccordion ? <FaAngleUp className='ml-auto'/> : <FaAngleDown className='ml-auto' />}
            </Button>{
              <ul
                className={`overflow-hidden transition-all duration-700 ease-in-out ${category.allowSingleAccordion ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <li>
                  <Link
                    to="/category/list"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Category List
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={()=>dispatch(openDialog('add_category'))}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Add A Category
                  </Link>
                  { activeDialog==="add_category" && <AddNewCategory />}
                </li>
                <li>
                  <Link
                    to="/category/subCategory"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Sub Category List
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={()=>dispatch(openDialog('add_subcategory'))}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition"
                  >
                    Add Sub Category List
                  </Link>
                </li>
              </ul>
            }
          </li>
          
           <li>
           <Link to="/orders">
             <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <IoBagHandleOutline className="text-[18px]" />
             Orders
            </Button>
           </Link>
            </li>
          <li>
            <Button className="w-full flex items-center gap-3 !justify-start !font-[500] !capitalize text-[14px] !text-[rgba(0,0,0,0.8)]">
              <IoIosLogOut className="text-[18px]" />
              Logout
            </Button>
          </li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Sidebar