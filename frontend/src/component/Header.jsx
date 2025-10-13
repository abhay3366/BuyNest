import { Link, NavLink } from "react-router"
import logo from "../assets/logo.svg";
import Search from "./Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoMdHeartEmpty } from "react-icons/io";


import { IoCartOutline, IoGitCompareOutline, IoLogOut, IoSettings } from "react-icons/io5";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";
import { useState } from "react";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckSquare, FaFirstOrder, FaHeart, FaUser, FaUserCircle } from "react-icons/fa";


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { GoListOrdered, GoPersonAdd } from "react-icons/go";
import { openCart } from "../utils/cartSlice";
import { login } from "../utils/authSlice";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {
  
    const [anchorEl, setAnchorEl] = useState(null);
    const userLogin = useSelector((state) => state.auth.userLogin)
    const handleOpenClose =useSelector((state)=>state.cart.openCart)
    const dispatch=useDispatch()
   

    const user = JSON.parse(localStorage.getItem("userData"))?.user || null;
    console.log("username",user?.name)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        dispatch(login(false))
       localStorage.removeItem("userData");
        setAnchorEl(null);
    };

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
                                {userLogin == false ? (<> <Link className="transition text-[15px] font-[500] hover:text-primary" to="/login">Sign In</Link> | <Link className="transition text-[15px] font-[500] hover:text-primary " to="/register">Register</Link>

                                </>) : (<>
                                   <button className="cursor-pointer flex gap-1" onClick={handleClick}>
                                     <FaUserCircle className="text-2xl cursor-pointer "  />
                                    <h1>{user?.name}</h1>
                                   </button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}

                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                         <MenuItem>
                                            <ListItemIcon>
                                                <FaUserCircle className="text-xl" />
                                            </ListItemIcon>
                                           <div className="leading-4">
                                            <h1 className="text-[15px]">{user?.name}</h1>
                                            <h3 className="text-[13px] text-gray-400">{user?.email}</h3>
                                           </div>
                                        </MenuItem>   
                                         <MenuItem>
                                            <Link to='/my-account' className="flex">
                                                <ListItemIcon>
                                                <FaUser className="text-xl" />
                                            </ListItemIcon>
                                           <div>
                                             <h1 className="text-[15px]">My Account</h1>
                                           </div>
                                            </Link>
                                        </MenuItem>   
                                         <MenuItem>
                                            
                                        </MenuItem>  
                                        <MenuItem onClick={()=>dispatch()}>
                                            <Link to="/" className="flex">
                                                <ListItemIcon>
                                                <FaHeart className="text-xl" />
                                            </ListItemIcon>
                                           <div>
                                             <h1 className="text-[15px]">My List</h1>
                                           </div>
                                            </Link>
                                        </MenuItem>    
                                        
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <IoLogOut className="text-2xl" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </>)}

                            </li>
                            <li>
                                <Tooltip title="Compare" placement="bottom">
                                    <IconButton aria-label="cart">
                                        <Badge badgeContent={4} classes={{ badge: "bg-primary text-white" }}>
                                            <IoGitCompareOutline />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart" placement="bottom">

                                    <IconButton aria-label="cart" onClick={()=>dispatch(openCart())}>
                                        <Badge badgeContent={4} classes={{ badge: "bg-primary text-white" }}>
                                            <IoCartOutline />
                                        </Badge>
                                    </IconButton>

                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Wishlist" placement="bottom">
                                    <IconButton aria-label="cart">
                                        <Badge badgeContent={7} classes={{ badge: "bg-primary text-white" }}>
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

        

            {/* {openCart && <Cart handleCart={handleCart} setOpenCart={setOpenCart} openCart={openCart} />} */}
            {handleOpenClose  && <Cart />}
        </header>
    )
}

export default Header
