import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";


const scaleName={
    c: "섭씨",
    f: "화씨"
}


function Tempertureinput(props){

    const handleChange = (event) =>{
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력하세요(단위:{scaleName[props.scale]}):</legend>
            <input type="text" value={props.temperature} onChange={handleChange}/>
            <BoilingVerdict celsius={props.temperature}/>
        </fieldset>
    );


}

export default Tempertureinput;