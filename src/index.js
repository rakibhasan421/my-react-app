import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Car from './car';
import Garage from './Garage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Car color="red" />
        <Garage />
    </React.StrictMode>
);
