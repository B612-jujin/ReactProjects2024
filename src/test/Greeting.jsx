import React from "react";
import {GuestGreeting, UserGreeting} from "./UserGuestGreeting";


function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn == true){
        return UserGreeting();
    }
    else if(isLoggedIn == false){
        return GuestGreeting();
    }



}
export default Greeting;
