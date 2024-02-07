import CardComponent from "../../../../module/CardComponent/CardComponent"
import { Button, Card, TextField } from "@mui/material";
import { useEffect, useState } from "react";


const EventManager = () =>{

    // const [cardImage, setCardImage] = useState('');
    const [eventProgram, setEventProgram] = useState<any>('');
    const [cardColor, setCardColor] = useState<any>('');
    const [eventDate, setEventDate] = useState<any>('');
    const [eventStart, setEventStart] = useState<any>('');
    const [eventEnd, setEventEnd] = useState<any>('');
    const [eventStatus, setEventStatus] = useState<any>('');

    const [components, setComponents] = useState<JSX.Element[]>([]);

    const addComponent = () => {
      const newComponent = <CardComponent eventProgram={eventProgram} eventDate={eventDate} 
                            eventStart={eventStart} eventEnd={eventEnd} eventStatus={eventStatus} 
                            cardColor={cardColor} />;
                            
      setComponents(prevComponents => [...prevComponents, newComponent]);
    
    };


    
    return(
       <>
            <Card sx={{height:"550px", width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"20px"}}>
                <h2>Add New Event</h2>
                <TextField id="outlined-basic" label="Event Type" variant="outlined" placeholder="For ex: dancing/singing" onChange={(e)=> setEventProgram(e.target.value)}/>
                <TextField id="outlined-basic" type="date" label="Event Date" variant="outlined" InputLabelProps={{shrink: true}} onChange={(e)=> setEventDate(e.target.value)} />
                <TextField id="outlined-basic" label="Event Start" variant="outlined" placeholder="For ex: 04:00 PM"  onChange={(e)=> setEventStart(e.target.value)} />
                <TextField id="outlined-basic" label="Event End" variant="outlined" placeholder="For ex: 04:00 PM"  onChange={(e)=> setEventEnd(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={() => addComponent()}>Add</Button>
            </Card>
        
        <div style={{display:"flex"}}>
            {components.map((component)=> component)}
        </div>
        
       </>
    )
}

export default EventManager;