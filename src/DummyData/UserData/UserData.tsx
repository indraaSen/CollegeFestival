export const  allUserData:any = [
    {
        fullName:"Dhinchak Pooja",
        email:"dhinchak@gmail.com",
        password: "dhinchak@gmail.com",
        department: "CS/IT",
        userType: 'Student'
    },
    {
        fullName:"Kamlesh",
        email:"kamlesh@gmail.com",
        password: "kamlesh@gmail.com",
        department: "CS/IT",
        userType: 'Student'
    },
    {
        fullName:"Aaditya Kumar",
        email:"aaditya@gmail.com",
        password: "aaditya@gmail.com",
        department: "CS/IT",
        userType: 'Student'
    },
    {
        fullName:"Bhopendar Jogi",
        email:"bhopendar@gmail.com",
        password: "bhopendar@gmail.com",
        department: "CS/IT",
        userType: 'Teacher'
    },
    {
        fullName:"Anvish kumar",
        email:"anvish@admingmail.com",
        password: "anvish@admingmail.com",
        userType: 'Admin'
    }
];

export const checkUser = (email:string, password:string) =>{
    return new Promise((res, rej) =>{
        return setTimeout(() => { 
            
            const user = allUserData.filter((user:any) => {
                if(user.email === email && user.password === password){
                    return user;
                }
            });

            if(user.length > 0){
                res({code : 200, UserData : user[0] , msg : "logged in"});
            }else{
                rej({code : 401, msg : "user not found"});
            }

        }, 500);
    })
}