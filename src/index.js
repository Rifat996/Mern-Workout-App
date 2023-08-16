import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WorkoutsContextProvider>
     <App />
    </WorkoutsContextProvider>
);

