import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data.js';
import 'normalize-css';
import './index.css';

//Componentes são montados aqui
ReactDOM.render(<App data={data} />,
    document.getElementById('root'));
