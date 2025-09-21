import { Link, NavLink } from "react-router"
import logo from "../assets/logo.svg";
import Search from "./Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoMdHeartEmpty } from "react-icons/io";


import { IoCartOutline, IoGitCompareOutline } from "react-icons/io5";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
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

            <div className="header py-3 border-b-[1px] border-gray-300">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <NavLink to="">
                            <img src={logo} alt="logo" className="w-[200px]" />
                        </NavLink>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%] flex items-center">
                        <ul className="flex items-center gap-2 pl-7">
                            <li>
                                <Link className="transition text-[15px] font-[500] hover:text-primary" to="/login">Sign In</Link> | <Link className="transition text-[15px] font-[500] hover:text-primary " to="/register">Register</Link>
                            </li>
                            <li>
                                <Tooltip title="Compare" placement="bottom">
                                <IconButton aria-label="cart">
                                    <Badge badgeContent={4} classes={{badge:"bg-primary text-white"}}>
                                        <IoGitCompareOutline />
                                    </Badge>
                                </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                               <Tooltip title="Cart" placement="bottom">
                                 <IconButton aria-label="cart">
                                    <Badge badgeContent={4} classes={{badge:"bg-primary text-white"}}>
                                        <IoCartOutline />
                                    </Badge>
                                </IconButton>
                               </Tooltip>
                            </li>
                            
                            <li>
                                <Tooltip title="Wishlist" placement="bottom">
                                <IconButton aria-label="cart">
                                    <Badge badgeContent={7} classes={{badge:"bg-primary text-white"}}>
                                        <IoMdHeartEmpty />
                                    </Badge>
                                </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    )
}

export default Header
