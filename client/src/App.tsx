import { Box, Container, Typography } from '@mui/material';

import { RouterProvider } from "react-router-dom";
import router from './router/Router';

import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {


  const styleContainer = {
    height: '98vh',
    display: 'grid',
    gridTemplateAreas:
      "'header header header' \
      'main main main' \
      'footer footer footer'",
    gridTemplateRows: '90px 1fr 70px',
    gridTemplateColumns: '15% 1fr 15%',
    gridGap: '4px',
  };
  const styleHeaderBox = {
    my: 1, display: 'block',
  }

  const styleMainBox = {
    my: 1, display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  const styleFooterBox = {
    my: 1, display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }



  return (
    <Container sx={styleContainer} fixed maxWidth="xl">
      <Provider store={store}>
        <Box sx={{ ...styleHeaderBox, border: "2px solid black", gridArea: 'header' }}>
          <Header />
        </Box>
        <Box sx={{ ...styleMainBox,background: '#dfb26e', border: "2px solid black", gridArea: 'main' }}>
          <RouterProvider router={router} />
        </Box>
        <Box sx={{ ...styleFooterBox, border: "2px solid black", gridArea: 'footer' }}>
          <Footer />
        </Box>
      </Provider>
    </Container>
  );
}

export default App
