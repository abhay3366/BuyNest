import { NavLink } from "react-router"
import logo from "../assets/logo.svg";
import Search from "./Search";
const Header = () => {
    return (
        <header>
            <div className="top-strip py-4">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 sm:w-[50%] w-[100%] text-center sm:text-left">
                            <p className="text-[14px] font-[500]">Get up to 50% off new session style, limited time</p>
                        </div>
                        <div className="col2 md:flex items-center justify-end hidden">
                            <ul className="flex gap-4">
                                <li>
                                    <NavLink to="/track_order" className="text-[14px]  font-[500] hover:text-primary hover:scale:110 transition">Track Order</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/help_center" className="text-[14px]  font-[500] hover:text-primary hover:scale:110 transition">Help Center</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="header py-3">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <NavLink to="">
                            <img src={logo} alt="logo" className="w-[200px]" />
                        </NavLink>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%]"></div>
                </div>
            </div>
        </header>
    )
}

export default Header
