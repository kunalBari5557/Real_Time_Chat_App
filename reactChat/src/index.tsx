import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes/routes';
import { Toaster } from 'react-hot-toast';
import store from './Redux/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    <Toaster />
</Provider>
  </React.StrictMode>
);

