import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import './index.css';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Signup/>
    </Provider>
  </React.StrictMode>
);
