import React from "react";

function WarningBanner(props){
    if(!props.warning){
        return null
    }
    return (
        <h2>경고!!!</h2>
    );
}

export default WarningBanner;