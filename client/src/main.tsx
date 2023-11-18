import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
// import { CssBaseline } from '@mui/material';
import { RouterProvider } from "react-router-dom";
import router from './router/Router'
import theme from './theme';
import App from './App';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      
           <RouterProvider router={router} />
      
    </ThemeProvider>
  </React.StrictMode>,
);