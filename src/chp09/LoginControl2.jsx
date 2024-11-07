import React, {useState} from "react";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";
import LogoutButton from "./LogOutButton";
import WarningBanner from "./WarningBanner";

function LoginControl2(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }

    return(
        <div>
            <WarningBanner warning={true}/>
           <Greeting isLoggedIn={isLoggedIn}/>
            {isLoggedIn?<LogoutButton onClick={handleLogoutClick}/>:<LoginButton onClick={handleLoginClick}/>}
            <li></li>
            이 사용자는 현재<b>{isLoggedIn ? ' 로그인' : ' 로그인하지 않은'}</b> 상태입니다.
        </div>
    );

    }

    export default LoginControl2;