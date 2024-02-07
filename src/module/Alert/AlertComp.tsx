import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { userContext } from '../../component/feature/MainComponent/MainComponent';

const AlertComp = ({openAlert,setOpenAlert,msg}:{msg:string,openAlert:boolean ,setOpenAlert:React.Dispatch<React.SetStateAction<boolean>>}) => {

  const {snackbarColor} = React.useContext(userContext);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    
   setOpenAlert(false);
  };

  return (
    <div>
      <Snackbar open={openAlert} autoHideDuration={1500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackbarColor}
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