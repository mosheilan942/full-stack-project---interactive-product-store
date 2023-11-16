import { Box, Container, Typography } from '@mui/material';

import { RouterProvider } from "react-router-dom";
import router from './router/Router';

import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {


  const styleContainer = {
    height: '100vh',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:'fixed', 
    marginTop: '0px',
    background: '#ffffff',
    width: '90vw'
  }

  const styleMainBox = {
     display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
    ,width: '90vW',

  }

  const styleFooterBox = {
     display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    position:'fixed', 
    bottom: '0',
    background: '#ffffff',
    width: '90vW'
  }



  return (
    <Container sx={styleContainer} fixed >
      <Provider store={store}>
        <Box sx={{ ...styleHeaderBox, gridArea: 'header',padding:'0 85px',left: 0}}>
          <Header />
        </Box>

        <Box sx={{ ...styleMainBox,background: '#e3c379', gridArea: 'main' }}>

          <RouterProvider router={router} />
        </Box>
        <Box sx={{ ...styleFooterBox, gridArea: 'footer' }}>
          <Footer />
        </Box>
      </Provider>
    </Container>
  );
}

export default App
