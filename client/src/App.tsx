import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';

import UserContextProvider from './context/UserContext';


function App() {


  const styleContainer = {
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto',
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
    top: 0,
    left: 0,
    marginTop: '0px',
    background: 'skyblue',
    color: 'black',
    width: '100%',
    zIndex: 1000
  }

  const styleMainBox = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  };


  const styleFooterBox = {
    background: 'black',
    fontSize: '130%',
    color: 'white',
    width: '100%',
    height: '700px',
    marginTop: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
