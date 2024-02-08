
import { Alert, Button } from "@mui/material";
import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent";
import ListComponent from "../../../module/ListComponent/ListComponent";
import EventManager from "../EventManager/EventManager";
import DropDownComponent from "../../../module/DropDownComponent/DropDowmComponent";
import { useState } from "react";
import KDKcollegeofEngineering from "../College/KDKcollegeofEngineering/KDKcollegeofEngineering";

const Student = () => {

  const tabs:string[] = ["Home", "Events", "Notice"];

  const [studentCollegeName,setStudentCollegeName] = useState('');
  const [helo, setHelo] = useState<JSX.Element>()

  const getCollegeName = (val:any) =>{
    setStudentCollegeName(val);
  }

  const checkEvent = () => {
   if(studentCollegeName === 'KDK college of Engineering'){
    setHelo(<KDKcollegeofEngineering card /> );
   }

  }

  return (
    <div>    
     <Alert severity="warning">Note: "It's a request to the students to avoid fights or any other thing that leads to the shutdown of the event". Enjoy the event!</Alert>
     <HeaderComponent tabs={tabs}/>
     <div style={{display:'flex', marginTop:'40px', justifyContent:'space-around'}}>
     <ListComponent/>
     <DropDownComponent getCollegeName={getCollegeName} />
     <Button sx={{height:'40px'}} variant="contained" onClick={checkEvent}>check</Button>
     </div>

      {helo}
      {/* {studentCollegeName === 'KDK college of Engineering' ? <KDKcollegeofEngineering card /> : ''} */}

    </div>
  )
};

export default Student;

