import React, { useEffect, useState } from "react";
import College from "../College/College";
import Auth from "../../Auth/Auth";
import Student from "../Student/Student";
import Admin from "../Admin/Admin";
import AlertComp from "../../../module/Alert/AlertComp";
import ReactDOM from "react-dom";

export const userContext = React.createContext<any>({})

const alertPortal = document.getElementById('div-Alert');

const MainComponent = () => {

  // const [studData, setStudData] = useState<any>([]);
  const [userLoginDetail, setUserLoginDetail] = useState<any>({});
  const [openAlert, setOpenAlert] = useState(false);
  const [msg, setMsg] = useState('please Login');

  // console.log("userLogindetails", userLoginDetail);

  useEffect(() => {
    if(userLoginDetail){
        setMsg(`${userLoginDetail.fullName} is logged In`);
    }
    if(Object.keys(userLoginDetail).length === 0){
        setMsg("Logged Out")
    }
}, [userLoginDetail,setUserLoginDetail,openAlert])


  return (
      <userContext.Provider value={{userLoginDetail,setUserLoginDetail,openAlert, setOpenAlert,msg, setMsg}}>
        {alertPortal && ReactDOM.createPortal( <AlertComp setOpenAlert={setOpenAlert} openAlert={openAlert} msg={msg}/> , alertPortal )}
        {Object.keys(userLoginDetail).length === 0 &&  <Auth  />}
        {userLoginDetail.userType === 'Student' && <Student />}
        {userLoginDetail.userType === 'Teacher' && <College />}
        {userLoginDetail.userType === 'Admin' && <Admin />}
      </userContext.Provider>

    // <div>
    //   <h1 className={styless["main-heading-h1"]}>Festival form</h1>
    //   <div className={styless["main-form_div"]}>
    //     <Student studData={studData} setStudData={setStudData} />
    //     <College studData={studData} setStudData={setStudData} />
    //   </div>
    // </div>
  );
};

export default MainComponent;
