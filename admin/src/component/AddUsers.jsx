import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import { MdClose } from 'react-icons/md';
import AddProduct from "./AddProduct"
import { closeDialog } from '../utils/DialogSlice';
import AddCategoryForm from './AddCategoryForm';
import AddSubCategoryForm from './AddSubCategoryForm';
import AddUsersForm from './AddUsersForm';

function PaperComponent(props) {
  const nodeRef = React.useRef(null);
 
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddUsers() {
   const activeDialog=useSelector((state)=>state.dialogReducer.activeDialog)
   const dispatch=useDispatch()
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    setOpen(true)
  },[activeDialog])


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button> */}
      <Dialog
        fullScreen
        open={activeDialog}
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
              onClick={()=>dispatch(closeDialog())}
              aria-label="close"
            >
              <MdClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             Add Users
            </Typography >
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        {/* add product */}
        <AddUsersForm />
      </Dialog>
    </React.Fragment>
  );
}
