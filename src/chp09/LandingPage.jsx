import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onCliickLogin =() =>{
        setIsLoggedIn(true);
    }

    const onClickLogout =()=>{
        setIsLoggedIn(false);
    };

    return(
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onCliickLogin}
                onClickLogout={onClickLogout}/>
            <div style={{padding: 16}}>경주와 함께하는 리액트 공부! 참 재미있어요!</div>
        </div>
    );

}
export default LandingPage;