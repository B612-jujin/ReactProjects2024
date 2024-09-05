import React from "react";

function Clock(props){
    return(
        <div>
            <h1>TEST CLOCK</h1>
            <h2 className={`CL`}>현재 시간:{new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;