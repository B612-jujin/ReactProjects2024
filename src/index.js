import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import NameRequestForm from "./chp11/NameRequstForm";
import SingUp from "./chp11/SingUp";
import Calculator from "./chp12/Calculator";
import Calculator2 from "./chp12/Calculator2";
import Calculator3 from "./chp12/Calculator3";
import DistanceConverter from "./chp12/Test/DistanceConverter";

// setInterval(()=>1000);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DistanceConverter/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
