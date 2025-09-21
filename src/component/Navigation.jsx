import { Button } from "@mui/material"
import { GoRocket } from "react-icons/go"
import { IoChevronDown } from "react-icons/io5"
import { RiMenu2Fill } from "react-icons/ri"
import { NavLink } from "react-router"
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
                    <Button className="gap-2 flex"><RiMenu2Fill  className="text-black w-[22px] h-[22px]" />
                        <span className="text-black font-bold font14"> SHOP BY CATEGORY </span><IoChevronDown className="text-black ml-4 font-medium" /></Button>
                </div>
                <div className="col-2 w-[60%]">
                    <ul className="flex item-center gap-5">
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
                        <li className="list-none">
                            <NavLink to="/fashion" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Fashion</NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink to="/electronics" className={({ isActive }) =>
                                `link transition font-medium ${isActive ? "text-primary border-b" : ""}`
                            }>Electronics</NavLink>
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