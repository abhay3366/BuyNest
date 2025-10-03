import { CiMenuFries } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { useState } from "react";
import Divider from "@mui/material/Divider";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="w-full h-[64px] pr-7 bg-[white] flex items-center justify-between shadow-sm dark:shadow-2xl">
      <div className="part1  w-[22%] flex items-center justify-end">
        <button className="w-[40px] h-[40px]  rounded-full flex items-center justify-center cursor-pointer">
          <CiMenuFries className="text-[22px] text-[rgba(0,0,0,0.8)]" />
        </button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-4">
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer">
          <Badge badgeContent={4} color="warning">
          <FaRegBell className="text-[22px] text-[rgba(0,0,0,0.8)]" />
          </Badge>
        </button>

        <div className="rounded-full w-[35px] h-[35px] cursor-pointer">
          <img  onClick={handleClick} src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" alt="" />

                <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
       
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
         <div className="flex items-center gap-3">
          <div className="rounded-full overflow-hidden cursor-pointer flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" className="w-[35px] h-[35px]" alt="" />
           <div>
             <h1 className="text-[14px]">Abhay Kant Tiwari</h1>
            <p className="text-[11px] text-gray-400">tabhaykant2@gmail.com</p>
           </div>
          </div>
         </div>
        </MenuItem>
        <Divider/>
        <MenuItem>
          <div className="flex items-center gap-2">
            <CgProfile />
            <span>Profile</span>
          </div>
       </MenuItem>
       <MenuItem>
          <div className="flex items-center gap-2">
            <IoLogOutOutline />
            <span>Logout</span>
          </div>
       </MenuItem>
       
       
       
      </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
