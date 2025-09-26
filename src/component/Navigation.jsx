import { Button } from "@mui/material"
import { GoRocket } from "react-icons/go"
import { IoChevronDown } from "react-icons/io5"
import { RiMenu2Fill } from "react-icons/ri"
import { Link, NavLink } from "react-router"
import CategorySidebar from "./CategorySidebar"
import { useState } from "react"
const Navigation = () => {
    const [sideBarStatus, setSideBarStatus] = useState(false)
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleSidebar = () => {
        setSideBarStatus(true)
        setOpen(true)
    }
    return (
        <nav>
            <div className="container flex items-center justify-end gap-8">
                <div className="col-1 w-[20%] " onClick={handleSidebar} >
                    <Button className="gap-2 flex"><RiMenu2Fill className="text-black w-[22px] h-[22px]" />
                        <span className="text-black font-bold font14"> SHOP BY CATEGORY </span><IoChevronDown className="text-black ml-4 font-medium" /></Button>
                </div>
                <div className="col-2 w-[60%]">
                    <ul className="flex item-center gap-5 nav">
                        <li className="list-none">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `link transition font-medium ${isActive ? "text-primary border-b font-extrabold" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="list-none relative">
                            <NavLink to="/productListing" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Fashion</NavLink>
                            <div className="submenu absolute top-[100%] left-[0%] min-w-[150px]  shadow-md hidden transition-all" >
                                <ul>
                                    <Link to="/">
                                        <li className="list-none w-full relative">
                                            <Button className=" w-full !justify-start">Men</Button>
                                            <div className="subbmenu absolute top-0 left-[100%] min-w-[150px]  shadow-md hidden transition-all" >
                                                <ul>
                                                    <Link to="/">
                                                        <li className="list-none w-full">
                                                            <Button className=" w-full !justify-start">Men</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start" >Women</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start">Kids</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start">Girls</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start rounded-non">Boys</Button>
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start" >Women</Button>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start">Kids</Button>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start">Girls</Button>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start rounded-non">Boys</Button>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </li>
                       <li className="list-none relative">
                            <NavLink to="/electronic" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Electronic</NavLink>
                            <div className="submenu absolute top-[100%] left-[0%] min-w-[150px]  shadow-md hidden transition-all" >
                                <ul>
                                    <Link to="/">
                                        <li className="list-none w-full relative">
                                            <Button className=" w-full !justify-start">Men</Button>
                                            <div className="subbmenu absolute top-[0] left-[100%] min-w-[150px]  shadow-md hidden transition-all" >
                                                <ul>
                                                    <Link to="/">
                                                        <li className="list-none w-full">
                                                            <Button className=" w-full !justify-start ">Men</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start" >Women</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start">Kids</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start">Girls</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start rounded-non">Boys</Button>
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start" >Women</Button>
                                             <div className="subbmenu absolute top-[0] left-[100%] min-w-[150px]  shadow-md hidden transition-all" >
                                                <ul>
                                                    <Link to="/">
                                                        <li className="list-none w-full">
                                                            <Button className=" w-full !justify-start ">Menn</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start" >Women</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start">Kids</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start">Girls</Button>
                                                        </li>
                                                    </Link>
                                                    <Link to="/">
                                                        <li className="list-none">
                                                            <Button className=" w-full !justify-start rounded-non">Boys</Button>
                                                        </li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start">Kids</Button>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start">Girls</Button>
                                        </li>
                                    </Link>
                                    <Link to="/">
                                        <li className="list-none">
                                            <Button className=" w-full !justify-start rounded-non">Boys</Button>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </li>
                        <li className="list-none">
                            <NavLink to="/bag" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Bag</NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink to="/footwear" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Footwear</NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink to="/groceries" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Groceries</NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink to="/beauty" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Beauty</NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink to="/wellness" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Wellness</NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink to="/jewellery" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Jewellery</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col_3 w-[20%]">
                    <p className="text-[14px] font-medium flex items-center gap-2"><GoRocket color="red" size="22px" /> Fee International Delivery</p>
                </div>
            </div>

            {/* category sidebar */}
            {sideBarStatus && <CategorySidebar toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} />}

        </nav>
    )
}
export default Navigation