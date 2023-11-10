import { Box, Container, Typography } from '@mui/material';
import './App.css'

function App() {

  return (
    <Container sx={
      {
        height: '100vh', display: 'flex', flexDirection: 'column',
         justifyContent: 'space-between', paddingBottom: '3%',
      }
    }
      fixed maxWidth="xl">
      <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
        <Typography variant='h3'>
          app
        </Typography>
        
      </Box>
    </Container>
  );
}

export default App
