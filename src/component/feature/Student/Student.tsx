
import { Alert } from "@mui/material";
import HeaderComponent from "../../../module/HeaderComponent/HeaderComponent";
import ListComponent from "../../../module/ListComponent/ListComponent";

const Student = () => {

  const tabs:string[] = ["Home", "Events", "Notice"];
  
  return (
    <div>    
     <Alert severity="warning">Note: "It's a request to the students to avoid fights or any other thing that leads to the shutdown of the event". Enjoy the event!</Alert>
     <HeaderComponent tabs={tabs}/>
     <ListComponent/>
    </div>
  )
};

export default Student;

