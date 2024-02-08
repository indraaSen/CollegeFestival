import CardComponent from "../../../module/CardComponent/CardComponent"
import { Button, Card, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../MainComponent/MainComponent";
import DropDownComponent from "../../../module/DropDownComponent/DropDowmComponent";
import KDKcollegeofEngineering from "../College/KDKcollegeofEngineering/KDKcollegeofEngineering";


const EventManager = () =>{

    // const [cardImage, setCardImage] = useState('');
    const [collegeName, setCollegeName] = useState<any>('');
    const [eventProgram, setEventProgram] = useState<any>('');
    const [cardColor, setCardColor] = useState<any>('');
    const [eventDate, setEventDate] = useState<any>('');
    const [eventStart, setEventStart] = useState<any>('');
    const [eventEnd, setEventEnd] = useState<any>('');
    const [eventStatus, setEventStatus] = useState<any>('');

    const [components, setComponents] = useState<JSX.Element[]>([]);

    const {userLoginDetail} = useContext(userContext);


    const addComponent = () => {
      const newComponent = <CardComponent eventProgram={eventProgram} eventDate={eventDate} 
                            eventStart={eventStart} eventEnd={eventEnd} eventStatus={eventStatus} 
                            cardColor={cardColor} />;
                            
      setComponents(prevComponents => [...prevComponents, newComponent]);
    
    };

    const getCollegeName = (val:any) => {
        setCollegeName(val);
    }

    
    return(
       <>
         {userLoginDetail.userType === 'Admin' ? <Card sx={{height:"550px", width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"20px"}}>
                <h2>Add New Event</h2>
                <DropDownComponent getCollegeName={getCollegeName} />
                <TextField id="outlined-basic" label="Event Type" variant="outlined" placeholder="For ex: dancing/singing" onChange={(e)=> setEventProgram(e.target.value)}/>
                <TextField id="outlined-basic" type="date" label="Event Date" variant="outlined" InputLabelProps={{shrink: true}} onChange={(e)=> setEventDate(e.target.value)} />
                <TextField id="outlined-basic" label="Event Start" variant="outlined" placeholder="For ex: 04:00 PM/AM"  onChange={(e)=> setEventStart(e.target.value)} />
                <TextField id="outlined-basic" label="Event End" variant="outlined" placeholder="For ex: 04:00 PM/AM"  onChange={(e)=> setEventEnd(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={() => addComponent()}>Add</Button>
            </Card> : ''}
        
        <div style={{display:"flex"}}>
            {collegeName === 'KDK college of Engineering' ? <KDKcollegeofEngineering card = {components.map((component)=> component)}/> : ''}

            {components.map((component)=> component)}
        </div>
        
       </>
    )
}

export default EventManager;