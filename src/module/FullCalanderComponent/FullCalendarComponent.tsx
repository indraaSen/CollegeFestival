import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FullCalendarComponent = ({handleDateClick,events}:{handleDateClick:() => void,events:[]}) => {


    return (
      <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      dateClick={handleDateClick}
      selectable={true}      
      events={events}
      height={"95vh"}
      eventDidMount={(info)=>{
        return new bootstrap.Popover(info.el,{
          title:info.event.title,
          placement:"auto",
          trigger:"hover",
          customClass:"popoverstyle",
          content:
          `Event Start : ${"dummy value 1"}<br>Event Start : ${"dummy value 1"}<br>Event Start : ${"dummy value 1"} <br> ` ,
          html:true,
          
        })
      }}
  
      />
    )

}

export default FullCalendarComponent;