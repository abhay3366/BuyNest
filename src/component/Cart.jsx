import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RxCross2 } from 'react-icons/rx';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function Cart({ handleCart, openCart, setOpenCart }) {
    console.log(setOpenCart)
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" >
            <RxCross2
                className='float-end bg-primary p-1 w-6 h-6 text-white font-bold cursor-pointer  relative z-10'
                onClick={() => handleCart(false)}
            />

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? '<InboxIcon />' : '<MailIcon />'}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? '<InboxIcon />' : '<MailIcon />'}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={() => (handleCart(true))}>Open drawer</Button>
            <Drawer open={openCart} anchor="right" onClose={() => (handleCart(false))}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
