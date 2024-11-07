import React, {useState} from "react";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";
import LogoutButton from "./LogOutButton";

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }

    let btn;
    if (isLoggedIn){
        btn = <LogoutButton onClick={handleLogoutClick} ></LogoutButton>
    }else {
        btn =<LoginButton onClick={handleLoginClick}></LoginButton>
    }

    return(
        <div>
           <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );

    }

    export default LoginControl;