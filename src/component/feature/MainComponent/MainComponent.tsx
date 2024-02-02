import React, { useState } from "react";
import College from "../College/College";
import Auth from "../../Auth/Auth";
import Student from "../Student/Student";
import Admin from "../Admin/Admin";

export const userContext = React.createContext<any>({})

const MainComponent = () => {

  // const [studData, setStudData] = useState<any>([]);
  const [userLoginDetail, setUserLoginDetail] = useState<any>({});

  console.log("userLogindetails", userLoginDetail);

  return (
      <userContext.Provider value={{userLoginDetail,setUserLoginDetail}}>
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
