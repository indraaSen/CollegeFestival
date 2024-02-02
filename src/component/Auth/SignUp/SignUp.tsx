import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import styless from '../Auth.module.scss';

const SignUp = ({setIsSignUp} : {setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [department, setDepartment] = useState('');

    return(
        <Box sx={{display:"flex", justifyContent:"center", margin:"20px"}}>
            <form className={styless["signUpForm"]} >
                <h1>Sign Up</h1>
                <TextField id="outlined-basic" label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant="outlined" />
                <TextField id="outlined-basic" label="department" value={department} onChange={(e) => setDepartment(e.target.value)} variant="outlined" />
                <Button variant="contained" type="submit" color="success">Sign Up</Button>

                <span>
                    Already have an Account ? <Button variant="text" onClick={() => setIsSignUp(false)}>SignIn</Button>
                </span>
            </form>
        </Box>
    )
}

export default SignUp;