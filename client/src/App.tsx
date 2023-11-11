import { Box, Container, Typography } from '@mui/material';

import { RouterProvider } from "react-router-dom";
import router from './router/Router';

import { store } from './Redux/store';
import { Provider } from 'react-redux';


function App() {
 

  const styleContainer = {
    height: '100vh', display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between', paddingBottom: '3%',
  }
  const styleMainBox = {
    my: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  }

 

  return (
    <Container sx={styleContainer} fixed maxWidth="xl">
      <Provider store={store}>
        <Box sx={styleMainBox}>
        <RouterProvider router={router} />
        </Box>
      </Provider>
    </Container>
  );
}

export default App
