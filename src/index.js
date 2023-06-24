import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comp2 from './Comp2';
import State from './State';
import State1 from './State1';
import State2 from './State2';
import Login from './Login';
import Register from './Register';
import Events from './Events';
import ChangeState1 from './ChangeState1';
import Get from './Get';
//import Registration from './Registration';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Get/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
