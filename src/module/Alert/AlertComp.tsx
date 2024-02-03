import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const AlertComp = ({openAlert,setOpenAlert,msg}:{msg:string,openAlert:boolean ,setOpenAlert:React.Dispatch<React.SetStateAction<boolean>>}) => {


  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

   // setOpen(false);
   setOpenAlert(false);
  };

  return (
    <div>
      <Snackbar open={openAlert} autoHideDuration={1500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity='success'
          variant="filled"
          sx={{ width: '100%' }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertComp;