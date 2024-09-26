import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './chp06/Notification.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./chp03/Library";
import Clock from "./chp04/Clock";
import CommentList from "./chp05/CommentList";
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";

// setInterval(()=>1000);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Accommodate/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
