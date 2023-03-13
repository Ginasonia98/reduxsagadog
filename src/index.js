import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from './dogState';
import dogSaga from './dogSaga';

const saga= createSagaMiddleware();
const store = configureStore ({
  reducer:{
    dogs : dogsReducer
  },
  middleware: [saga]
});
saga.run(dogSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);


