import React from "react";
import Tempertureinput from "./Tempertureinput";



function Calculator(props){
    return(
        <div>
            <Tempertureinput scale="c"/>
            <Tempertureinput scale="s"/>

        </div>


    );
}

export default Calculator;