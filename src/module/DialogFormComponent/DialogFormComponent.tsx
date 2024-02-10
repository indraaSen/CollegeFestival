import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const DialogFormComponent = ({handleClose, open,setEventName,getData,eventDate} : {handleClose: () => void, open:any,setEventName: React.Dispatch<React.SetStateAction<string>>,getData:()=>void,eventDate:string}) => {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add new Event</DialogTitle>
        <DialogContent>
          <TextField autoFocus required margin="dense" id="eventName" name="eventName" label="Event Name"
            type="text" fullWidth variant="standard" onChange={(e) => setEventName(e.target.value)}/>
          <TextField required margin="dense" id="date" name="date" label="Event Date" type="date" InputLabelProps={{shrink: true}} 
            fullWidth variant="standard" value={eventDate}/>
          <TextField required margin="dense" id="startTime" name="startTime" label="Event Start At" type="text"
            fullWidth variant="standard"/>
          <TextField required margin="dense" id="endTime" name="endTime" label="Event End At" type="text"
            fullWidth variant="standard"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={getData}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogFormComponent;