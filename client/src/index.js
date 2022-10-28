import React from 'react';
import ReactDOM from 'react-dom';
import Context from "./components/context"
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
