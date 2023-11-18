import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';

import UserContextProvider from './context/UserContext';


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
    background: '#7a9cc6',
    color: 'gold',
    maxWidth: '1280px',
    zIndex: 1000
  }

  const styleMainBox = {
    background: '#9fbbcc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: '90px',
    width: '100%',
    minHeight: '100vh',
    overflowY: 'auto' // זה מאפשר גלילה אנכית
  };


  const styleFooterBox = {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: 'inherit',
    bottom: '0',
    background: '#7a9cc6',
    color: 'gold',
    maxWidth: '1280px',
    height: '60px'

  }




  return (
    <UserContextProvider>
    <Box sx={styleContainer}>
      <Provider store={store}>
        <Box sx={{ ...styleHeaderBox, gridArea: 'header' }}>
          <Header />
        </Box>

        <Box sx={{ ...styleMainBox, gridArea: 'main' }}>
       
          <Outlet/>
        </Box>

        <Box sx={{ ...styleFooterBox, gridArea: 'footer' }}>
          <Footer />
        </Box>
      </Provider>
    </Box>
    </UserContextProvider>
  );
}


export default App
