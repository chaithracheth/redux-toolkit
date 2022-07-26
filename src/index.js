import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {configureStore} from "@reduxjs/toolkit";
import catSliceReducer from "./Reducer/catSliceReducer";
import userSliceReducer from "./Reducer/userSliceReducer";
import rootSaga from "./sagas/RootSaga";
const saga = createSagaMiddleware();
const store = configureStore({
    reducer:{
        cats:catSliceReducer,
        user:userSliceReducer
    },
    middleware:[saga]
})
saga.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
