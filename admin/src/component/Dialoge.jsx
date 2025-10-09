import * as React from 'react';

import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../utils/DialogSlice';
import AddProduct from './AddProduct';

const Transition = React.memo(
  React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })
);


export default function FullScreenDialog() {
  const isDialogOpen=useSelector((state)=>state.dialogReducer.isDialogOpen)
 
  const dispatch=useDispatch();
  const handleClose = () => {
    dispatch(toggle());
  };



  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={isDialogOpen}
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <MdClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             Add Product
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        {/* add product */}
        <AddProduct/>
      </Dialog>
    </React.Fragment>
  );
}
