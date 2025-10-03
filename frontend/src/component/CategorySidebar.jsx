import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';


export default function CategorySidebar({ open, setOpen, toggleDrawer }) {

   

    const [accordion, setAccordion] = useState(false);
    const [accordion1, setAccordion1] = useState(false);


    const handleAccordion = () => {
        setAccordion(!accordion);
    };
    const handleAccordion1 = () => {
        setAccordion1(!accordion1);
    };




    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="cursor-pointer">
            <div onClick={toggleDrawer(false)}>
                <RxCross2 className='float-end bg-primary p-1 size-6 text-white text-bold cursor-pointer' onClick={() => setOpen(false)} />
                <h3 className='p-3 font16 text-center font-[500]'>Shop By Category</h3>
            </div>
            <Divider />
            <div className="scroll">
                <ul className="w-full">
                    <li onClick={handleAccordion} className='flex items-center justify-between'>
                        <Button>Fashion</Button>
                        <FaPlus />
                    </li>
                    <ul className={!accordion && `hidden`}>
                        <li>Abhaya</li>
                        <li>Abhaya</li>
                    </ul>
                </ul>

                <ul className="w-full">
                    <li onClick={handleAccordion1} className='flex items-center justify-between'>
                        <Button>Fashion</Button>
                        <FaPlus />
                    </li>
                    <ul className={!accordion1 && `hidden`}>
                        <li>Abhay</li>
                        <li>Abhay</li>
                    </ul>
                </ul>
            </div>
        </Box>

    );



    return (
        <div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}
