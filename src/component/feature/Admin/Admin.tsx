import { useState } from "react";
import DialogFormComponent from "../../../module/DialogFormComponent/DialogFormComponent";
import FullCalendarComponent from "../../../module/FullCalanderComponent/FullCalendarComponent";
import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent";
import EventManager from "../EventManager/EventManager";

const Admin = () => {
    const tabs:string[] = ["Home", "Manage Events", "Notice"];

    const [open, setOpen] = useState(false);
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventStartTime, setEventStartTime] = useState('');
    const [eventEndTime, setEventEndTime] = useState('');
    const [events, setEvents] = useState<any>([]);
  
    const handleClose = () => {
      setOpen(false);
    };

    const  handleDateClick:any = (arg:any) =>{
        setEventDate(arg.dateStr);
        setOpen(true);
    } 
    
    const getData = () => {

        const newEvent = {
            title: eventName,
            start: eventDate,
            end:eventDate
        };

        setEvents((prevEvent:any )=> [...prevEvent, newEvent])
        setOpen(false);
    }

    return(
        <div>
            {/* <HeaderComponent tabs={tabs} />
            <EventManager /> */}
            <h1>this is admin</h1>
            <DialogFormComponent open={open} handleClose={handleClose} setEventName={setEventName} eventDate={eventDate} getData={getData} />
            <FullCalendarComponent handleDateClick={handleDateClick} events={events} />
        </div>
    )
};

export default Admin;