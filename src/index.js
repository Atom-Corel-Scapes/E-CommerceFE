import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Display  from './display/Display.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/Signup' element={<Signup/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Display' element={<Display/>} />


    </Routes>
    </BrowserRouter>
   
  </Provider>
);
