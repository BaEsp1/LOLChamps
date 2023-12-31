import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import "./index.css";
import App from "./App"
import store from './Components/Redux/Store'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
      ,
  document.getElementById('root')
  );


  reportWebVitals();