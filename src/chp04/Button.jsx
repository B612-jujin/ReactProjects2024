import React from "react";

function Button(props){
    return(
        <button className={`bg-${props.color}`} onClick= {function(){
        alert("확인?");
    }}>
            <b>
                {props.children}
            </b>
        </button>
    )
}



export default Button;