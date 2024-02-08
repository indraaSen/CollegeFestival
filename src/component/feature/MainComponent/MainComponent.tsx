import React, { useEffect, useState } from "react";
import College from "../College/College";
import Auth from "../../Auth/Auth";
import Student from "../Student/Student";
import Admin from "../Admin/Admin";
import AlertComp from "../../../module/AlertComponent/AlertComp";
import ReactDOM from "react-dom";

export const userContext = React.createContext<any>({})

const alertPortal = document.getElementById('div-Alert');

const MainComponent = () => {

  const [userLoginDetail, setUserLoginDetail] = useState<any>({});
  const [openAlert, setOpenAlert] = useState(false);
  const [msg, setMsg] = useState('please Login');
  const [snackbarColor, setSnackbarColor] = useState<any>('');

  useEffect(() => {
    if(userLoginDetail){
        setSnackbarColor('success');
        setMsg(`${userLoginDetail.fullName} is logged In`);
    }
    if(Object.keys(userLoginDetail).length === 0){
      setSnackbarColor('error');
        setMsg("Logged Out");
    }
}, [userLoginDetail,setUserLoginDetail,openAlert])


  return (
      <userContext.Provider value={{userLoginDetail,setUserLoginDetail,openAlert, setOpenAlert,msg, setMsg,snackbarColor}}>
        {alertPortal && ReactDOM.createPortal( <AlertComp setOpenAlert={setOpenAlert} openAlert={openAlert} msg={msg}/> , alertPortal )}
        {Object.keys(userLoginDetail).length === 0 &&  <Auth  />}
        {userLoginDetail.userType === 'Student' && <Student />}
        {userLoginDetail.userType === 'Teacher' && <College />}
        {userLoginDetail.userType === 'Admin' && <Admin />}
      </userContext.Provider>

  );
};

export default MainComponent;
