import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {App} from 'components/App/App';
import './index.css';
// import 'modern-normalize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
