import { useContext, useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { userContext } from "../feature/MainComponent/MainComponent";

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    return(
        <div>
            {isSignUp ? <SignUp setIsSignUp = {setIsSignUp}/> : <SignIn setIsSignUp = {setIsSignUp}/>}

        </div>
    )
}

export default Auth;