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
    gridTemplateRows: '80px 1fr 50px',
    gridTemplateColumns: '15% 1fr 15%',
    gridGap: '4px',
  };
  const styleMainBox = {
    my: 1, display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
  }



  return (
    <Container sx={styleContainer} fixed maxWidth="xl">
      <Provider store={store}>
        <Box sx={{ ...styleMainBox, border: "2px solid red", gridArea: 'header' }}>
          <Header />
        </Box>
        <Box sx={{ ...styleMainBox, border: "2px solid red", gridArea: 'main' }}>
          <RouterProvider router={router} />
        </Box>
        <Box sx={{ ...styleMainBox, border: "2px solid red", gridArea: 'footer' }}>
          <Footer />
        </Box>
      </Provider>
    </Container>
  );
}

export default App
