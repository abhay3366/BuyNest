import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Draggable from 'react-draggable';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../utils/DialogSlice';


function PaperComponent(props) {
  const nodeRef = useRef(null);

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

export default function AddSliderBanner() {
  const activeDialog = useSelector((state) => state.dialogReducer.activeDialog)
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    slider_banner: ""
  })
  // console.log(activeDialog)
  useEffect(() => {
    activeDialog == 'add_home_slider_banner' && setOpen(true)
  }, [activeDialog])

  const handleBannerImg=(e)=>{
    const file=e.target.files[0];
    console.log(file)
    setFormData((prev)=>({...prev,slider_banner:file}))
  }
  const uploadImage = () => {
    const data=new FormData();
    console.log("df",formData.slider_banner)
    data.append("file",formData.slider_banner)
    console.log(data)
  }



  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={() => dispatch(closeDialog())}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Upload Banner
        </DialogTitle>
        <DialogContent>
         <div>
            <form action="">


              <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" name='slider_banner' onChange={handleBannerImg} class="hidden" />
                </label>
              </div>

              <Button className='w-full !bg-[#4A93FF] !text-white mt-2 my-3.5' onClick={uploadImage}>Upload</Button>
            </form>
          </div>
        </DialogContent>

      </Dialog>
    </>
  );
}