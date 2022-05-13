import React from "react";
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter } from "react-router-dom";

import App from './components/App';
import './scss/main.scss';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.querySelector("#root")
)