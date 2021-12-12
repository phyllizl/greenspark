import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './themes'
import { ThemeProvider } from '@mui/material/styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
