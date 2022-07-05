import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {configureStore} from "./redux/configureStore";
import {Provider} from "react-redux";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { ThemeProvider } from '@mui/material/styles';
import Theme from "./components/theme";
import 'bootstrap-css-only';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';





axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;


const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={Theme}>
<Provider store={store}>
    <App />
</Provider>
      </ThemeProvider>
  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
