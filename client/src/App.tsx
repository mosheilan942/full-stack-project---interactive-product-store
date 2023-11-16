import { Box } from '@mui/material';
import { RouterProvider } from "react-router-dom";
import router from './router/Router';

import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {


  const styleContainer = {
    height: '100vh',
    width: '100%',
    display: 'grid',
    gridTemplateAreas:
      "'header header header' \
      'main main main' \
      'footer footer footer'",
    gridTemplateRows: '90px 1fr 70px',
    gridTemplateColumns: '15% 1fr 15%',
    gridGap: '4px'
  };

  const styleHeaderBox = {
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: 'inherit',
    marginTop: '0px',
    background: '#ffffff',
    maxWidth: '1280px'
  }

  const styleMainBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: '100vh'
  }

  const styleFooterBox = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: 'inherit',
    bottom: '0',
    background: '#ffffff',
    maxWidth: '1280px',
    height: '20px'
    
  }



  return (
    <Box sx={styleContainer}>
      <Provider store={store}>
        <Box sx={{ ...styleHeaderBox, gridArea: 'header'}}>
          <Header />
        </Box>

        <Box sx={{ ...styleMainBox, background: '#e3c379', gridArea: 'main'}}>

          <RouterProvider router={router} />
        </Box>
        <Box sx={{ ...styleFooterBox, gridArea: 'footer' }}>
          <Footer />
        </Box>
      </Provider>
    </Box>
  );
}

export default App
