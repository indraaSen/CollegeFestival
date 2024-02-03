import { Box, Button, Card, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { checkUser } from "../../../DummyData/UserData/UserData";
import { userContext } from "../../feature/MainComponent/MainComponent";

const SignIn = ({setIsSignUp} : {setIsSignUp:  React.Dispatch<React.SetStateAction<boolean>>}) => {
    const contextData = useContext(userContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginUser:any = async () => {

        const loginChecked:any = await checkUser(email, password).catch((err) => {
            console.log("ERR", err);
        });
        
        if(loginChecked && loginChecked.code === 200){
            contextData.setUserLoginDetail(loginChecked.UserData);
            contextData.setOpenAlert(true);
            // alert("user logged in");
        }else{
            alert("user not found");
            contextData.setUserLoginDetail({});    
        }
    }

    

    return(

        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <Card sx={{height:"400px", width:"400px", display:"flex", flexDirection:"column", justifyContent:"space-around", padding:"40px"}}>
                <h1>Sign In</h1>
                <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <Button variant="contained" color="primary" onClick={()=> LoginUser()}>Sign In</Button>

                <span>
                    Do not have an Account ? <Button variant="text" onClick={() => setIsSignUp(true)}>Sign Up</Button>
                </span>
            </Card>
        </Box>
    )
}

export default SignIn;