import React, {useState} from "react";
import Tempertureinput from "./Tempertureinput";
import BoilingVerdict from "./BoilingVerdict";


//화씨를 섭씨로 변경해서 반환
function toCelsius(fahrenheit){
    return (fahrenheit-32) * 5/9;
}


//섭씨온도를 화씨로 변경해서 반환
function toFahrenheit(celsius){
    return celsius * 9/5 + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round((output * 1000)/1000);
    return rounded.toString();
}

function Calculator3(props){

    const [temperture, setTemperature] =useState('');

    const [scale,setScale] = useState('c');

    const handleCelsiusChange = (temperature) =>{
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) =>{
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === 'f' ? tryConvert(temperture,toCelsius):temperture;
    const fahrenheit = scale === 'c' ? tryConvert(temperture,toFahrenheit):temperture;

    return(
        <div>
            <Tempertureinput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
            <Tempertureinput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>


    );
}

export default Calculator3;